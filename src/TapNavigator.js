import React, { useEffect, useRef, useState, useCallback } from 'react';

function TapElem(props) {
    return (
        <div className='tap-elem'>
            {props.children}
        </div>
    );
}

// TODO: scroll-focused: dont forget 
function TapNavigator(props) {
    const tapNavi = useRef(null);
    const navigatables = useRef(null);
    const overlays = useRef(null);
    const [prev, setPrev] = useState(0);
    let [focus, setFocus] = useState(0); 

    let setFocusNext = () => {
        let elems = navigatables.current.children;
        let len = elems.length - 1;

        let focusIndex = focus;
        let prevIndex = prev;

        focusIndex = (focusIndex < len) ? focusIndex + 1 : 0;
        prevIndex = (focusIndex > 0) ? focusIndex - 1 : len;

        setFocus(focusIndex);
        setPrev(prevIndex);
    }

    let setFocusPrevious = () => {
        let elems = navigatables.current.children;
        let len = elems.length - 1;

        let focusIndex = focus;
        let prevIndex = prev;

        focusIndex = (focusIndex > 0) ? focusIndex - 1 : len;
        prevIndex = (focusIndex < len) ? focusIndex + 1 : 0;
        

        setFocus(focusIndex);
        setPrev(prevIndex);
    }

    useEffect(() => {
        let elems = navigatables.current.children;
        elems[prev].classList.remove('tap-focused');
        elems[focus].classList.add('tap-focused');
        console.log(prev, focus);
    }, [focus, prev]);



    return (
        <div ref={tapNavi} className='tap-navi'>
            <div ref={navigatables} className='navigatables'>
                {props.children}
            </div>
            <div ref={overlays} className='overlays'>
                <div className='left' onClick={setFocusPrevious}></div>
                <div className='right' onClick={setFocusNext}></div>
            </div>
        </div>
    );


}

export { TapNavigator, TapElem };