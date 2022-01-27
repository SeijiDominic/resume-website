import React from 'react';

function Content(props) {
    let hdrStyles = {
        background: `no-repeat 50% 42%/100% url(${props.hdrImage})`
    };

    return (
        <div className='sticky-layout about-me'>
            <header className='sticky-child'
            style={hdrStyles}>
                <div className='title'>
                    {props.title}
                </div>
            </header>

            <main className='main-content'>
                {props.children}
            </main>
            <footer>
                {props.footer}
            </footer>
        </div>
    );
}

export default Content;