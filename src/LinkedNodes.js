import React, { useCallback, useEffect, useState } from 'react';
import { toComponentArray } from './Utils';

function LinkedNodes(props) {
  let [ elements, setElements ] = useState(null);
  let [nodes] = useState(toComponentArray(props.children));

  let insertLinkers = useCallback((arr) => {
    let newLen = (nodes.length * 2) - 1;
    let newArr = [];

    for (let i = 0; i < nodes.length; i++) {
      let n = i * 2;
      newArr.push(nodes[i]);
      if (n < newLen - 1) newArr.push(<Linker key={crypto.randomUUID()} />);
    }

    return newArr;
  }, [ nodes ]);

  // I might add a functionality to add nodes on runtime.
  useEffect(() => {
    setElements(insertLinkers());
  }, [nodes, insertLinkers]);
  
  return elements;
}

function Node(props) {
  return (
    <div className='node'>
      {props.content}
    </div>
  );
}

function Linker(props) {
  return (
    <span className='linker'>
      I am linker
    </span>
  );
}


export { LinkedNodes, Node };