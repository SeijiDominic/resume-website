import React from 'react';

function Content(props) {
    return (
        <div className='sticky-layout about-me'>
            <header className='sticky-child'
            style={props.hdrStyle}>
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