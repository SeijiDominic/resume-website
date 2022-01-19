import React from 'react';

function Content(props) {
    return (
        <>
            <header>
                <h1>{props.title}</h1>
            </header>
            
            <main>
                {props.children}
            </main>

            <footer>
                {props.footer}
            </footer>
        </>
    );
}

export default Content;