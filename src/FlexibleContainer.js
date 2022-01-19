import React, { useState, useEffect } from 'react';


function FlexibleContainer(props) {
    const [direction, setDirection] = useState(props.direction || 'column');
    const [justify, setJustify] = useState(props.justify || 'flex-start');
    const [align, setAlign] = useState(props.align || 'flex-start');

    const element = <div>{props.children}</div>

    useEffect(() => {
        element.style.display = 'flex';
        element.style.direction = direction;
        element.style.justifyContent = justify;
        element.style.alignItems = align;
    });


    return element;
}


export default FlexibleContainer;