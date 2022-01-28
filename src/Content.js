import React from 'react';

function Content(props) {
    let hdrStyles = {
        background: `no-repeat 100% 38%/120% url(${props.hdrImage})`
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
                {props.content}
            </main>
            <footer>
                {props.footer}
            </footer>
        </div>
    );
}

export default Content;