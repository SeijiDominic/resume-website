import React from "react";

function toComponentArray(items) {
  items = items.map((item) => {
    return item;
  });
  if (!Array.isArray(items)) {
    Array.from(items)
  }

  return (Array.from(items)).map((item) =>  {
    let newp = { ...item.props, key: crypto.randomUUID()};
    // let newc = React.cloneElement(item, newp);
    let newc = <item.type {...newp} />;
    

    return newc;
    
    // React.cloneElement(item, {...item.props, key: crypto.randomUUID()}, item.children)
  });
}

export { toComponentArray };