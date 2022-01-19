import React from 'react';

function GenInfo(props) {
    return (
    <>
        <div>
            <div className='first-half'>
                <img alt='avatar' src={props.avatar} />
            </div>
            <div className='second-half'>
                <div>
                    <h1>{props.name}</h1>

                </div>
            </div>
        </div>
    </>);


}

export default GenInfo;