# Stop execution if any command fails
$ErrorActionPreference = "Stop"

# Bump version
pnpm version patch

# Get version from package.json
$VERSION = node -p "require('./package.json').version"

# Build with new version injected
pnpm build

# Push commit + tag
git push --follow-tags

# Create release with built userscript only
gh release create "v$VERSION" dist/dlscript.user.js `
  --title "v$VERSION" `
  --notes "Release v$VERSION"