import React from 'react';

function Content(props) {
    return (
        // <div className='default-content'>
        //     <header>
        //         <h1>{props.title}</h1>
        //     </header>
            
        //     <main>
        //         {props.children}
        //     </main>

        //     <footer>
        //         {props.footer}
        //     </footer>
        // </div>


        <div className='contra'>
            <header className='unko'>
                this is header
            </header>
            <div className='unko2'>
                <main>
                This main
                </main>
                <side>
                This side
                </side>
            </div>
            <footer className='unko3'>
                This foot
            </footer>
        </div>
    );
}

export default Content;