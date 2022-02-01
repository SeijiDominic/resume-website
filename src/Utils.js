import React from "react";

// processes component list to one with properly keyed elements using uuid.
function toComponentArray(items) {
  items = items.map((item) => {
    return item;
  });
  if (!Array.isArray(items)) {
    Array.from(items)
  }

  return (Array.from(items)).map((item) =>  {
    let newp = { ...item.props, key: crypto.randomUUID()};
    let newc = <item.type {...newp} />;
    return newc;
  });
}

export { toComponentArray };