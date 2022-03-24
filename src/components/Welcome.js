import React, { useEffect, useRef, useState } from 'react';

// Id probably delete this tbh.
function Welcome(props) {
    const anicon = useRef(null);
    const [animatableHTML, setAnimatableHTML] = useState(props.animatableHTML);

    //on mount
    useEffect(() => {
        initAnimatables();

        setTimeout(() => {
            initAnimations();
        }, 1000);
        
    }, []);

    let initAnimatables = async () => {
        let animatable = (Array.isArray(animatableHTML.props.children)) ? Array.from(animatableHTML.props.children): Array.of(animatableHTML.props.children);
        let innerTexts = [];
        let newConChildren = [];

        console.log(animatableHTML.props.children)

        animatable.forEach(element => {
            innerTexts.push(element.props.children);
        });

        //put each letters in a span.
        let buffer = [];
        innerTexts.forEach(element => {
            let letters = [];
            Array.from(element).forEach(letter => {
                let className = (letter !== ' ') ? 'burried-letter' : 'unaffected'; 
                letters.push(<span className={className}>{letter}</span>);
            });
            buffer.push(letters);
        });

        for (let i = 0; i < animatable.length; i++) {
            let tem = animatable[i];
            newConChildren.push(React.cloneElement(tem, {}, buffer[i]));
        }
    
        setAnimatableHTML(React.cloneElement(animatableHTML, {}, newConChildren));

        //im gonna return the processed divs for further processing.
        return anicon;
    }

    function recursiveTimeout(iterable, length, timeout) {
        setTimeout(() => {
            let len = iterable.length;
            iterable[(len) - length].classList.add('emerge');
            console.log(iterable[(len) - length]);
            if (--length > 0) {
                // console.log(length);
                recursiveTimeout(iterable, length, timeout);
            }
        }, timeout);
    }

    let initAnimations = async () => {
        const animatables = await anicon.current.getElementsByTagName('div');

        for (let i = 0; i < animatables.length; i++) {
            let spaz = Array.from(await animatables[i].getElementsByClassName('burried-letter'));


            setTimeout(
                recursiveTimeout(spaz, spaz.length, 40),
                2000
            );
            

            // for (let i = 0; i < spaz.length; i++) {
            //     await setTimeout(spaz[i].classList.add('emerge'), 300);
            // }

            // spaz.forEach(span => {
            //     span.classList.add('emerge');
            // });

            // setTimeout(() => {
            //     spaz.forEach(span => {
            //         span.classList.add('emerge');
            //     });
            // }, 500);
            
            
        }   
    }

    

    return (
        <div className='welcome-container'>
            <div className='welcome-page'>
                <div className='animated-bg'>
                    <div className='relative-container'>
                        <div className='top'></div>
                        <div className='bot'></div>
                    </div>
                    
                </div>
                <div ref={anicon} className='animatable-container'>
                    {animatableHTML}
                </div>
            </div>
        </div>
    );
}

export default Welcome;