export function getReactProps(el) {
  if (!el) return null;
  for (const key in el) {
    if (key.startsWith("__reactProps$")) return el[key];
  }
  return null;
}
export function findInReactFiberTree(element, targetKey) {
  if (!element || typeof element !== "object") return null;

  // Find the dynamic __reactFiber$ key
  const fiberKey = Object.keys(element).find((k) =>
    k.startsWith("__reactFiber$"),
  );

  if (!fiberKey) return null;

  const rootFiber = element[fiberKey];
  if (!rootFiber) return null;

  const stack = [rootFiber];

  while (stack.length > 0) {
    const fiber = stack.pop();
    if (!fiber || typeof fiber !== "object") continue;

    const props = fiber.memoizedProps;

    // Check if this fiber's props contain the target key
    if (props && typeof props === "object" && targetKey in props) {
      // return { [targetKey]: props[targetKey], fiber: fiber.stateNode || fiber };
      return props[targetKey];
    }

    // Traverse children via Fiber links
    if (fiber.child) {
      stack.push(fiber.child);
    }

    // Traverse siblings
    if (fiber.sibling) {
      stack.push(fiber.sibling);
    }
  }

  return null;
}
