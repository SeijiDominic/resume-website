import React, { useEffect, useState, useRef } from 'react';
// import Content from './Content';
// import { Institutuion, PlayerStat } from './PlayerStats';

function Contact(props) {
  const fadeElemsContainer = useRef(null);
  const [fadeElems, setFadeElems] = useState(null);

  const setStyleOnShow = (elem, styles) => {
    let elemInfo = elem.getBoundingClientRect();
    let viewPort = window.innerHeight;
    let isVisible = elemInfo.top > viewPort
    elem.classList.toggle(...styles, isVisible);
  }

  const windowScrollHandler = () => {
    fadeElems.forEach(child => setStyleOnShow(child, ['hidden']));
  }

  // Wait for fade container to initialize before setting the array containing the fade elements
  useEffect(() => {
    setFadeElems(Array.from(fadeElemsContainer.current.children));
  }, [fadeElemsContainer]);

  // set window scroll listener.
  useEffect(() => {
    const root = document.getElementsByClassName('right')[0];
    if (fadeElems !== null) root.addEventListener('scroll', windowScrollHandler);
  }, [fadeElems]);

  return (
    <>
      <div ref={fadeElemsContainer} className='scroll-animatables'>
        <div>Under development</div>
        
      </div>
    </>
  );
}

export default Contact;