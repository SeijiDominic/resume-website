import React from 'react';

function Content(props) {
    return (
        <div className='default-content'>
            <header>
                <h1>{props.title}</h1>
            </header>
            
            <main>
                {props.children}
            </main>

            <footer>
                {props.footer}
            </footer>
        </div>
    );
}

export default Content;