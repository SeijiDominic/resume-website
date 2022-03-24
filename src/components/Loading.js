import React, {} from 'react';

function Loading(props) {
  return (
    <div className='load-page'>
      <div className='loading'>
        <div className='left-loader'></div>
        <div className='loading-msg'>{props.msg || '<<Loading>>'}</div>
        <div className='right-loader'></div>
      </div>
    </div>
  );
}

export default Loading;