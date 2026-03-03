$ErrorActionPreference = "Stop"

# 1. Bump version in package.json ONLY (no commit/tag yet)
pnpm version patch --no-git-tag-version

# 2. Grab the new version
$VERSION = node -p "require('./package.json').version"

# 3. Run your build
pnpm build

# 4. Manually commit, tag, and push
git add .
git commit -m "v$VERSION"
git tag "v$VERSION"
git push origin main --tags

# 5. Create GitHub release
gh release create "v$VERSION" dist/dlscript.user.js --title "v$VERSION" --notes "Release v$VERSION"