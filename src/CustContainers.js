import React, {  } from 'react';

function TitledContainer(props) {
  return (
    <div className={`plain-cont ${props.className}`}>
      <div className='title'>
        <h1>{props.title}</h1>
      </div>
      <div className='content'>
        {props.children}
      </div>
        
    </div>
  );
}

function ReverseC(props) {
    
    return (
        <div className='reversec'>
          <div className='left'>
            {props.left}
          </div>
          <div className='right'>
            {props.right}
          </div>
        </div>
    );
}

export { TitledContainer, ReverseC };