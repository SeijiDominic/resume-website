import React from 'react';
import { useEffect, useState, useRef } from 'react';

function Content(props) {
  const [bgImg, setBgImg] = useState(null);
  const showOnScroll = useRef(); 
  let hdrStyles = {
    background: `no-repeat 100% 38%/120% url(${bgImg})`
  };

  useEffect(() => {
    //get show on scroll elements
    let elems = showOnScroll.current;
    console.log(elems);
    
  }, [showOnScroll]);

  useEffect(() => {
    let newImg = new Image();
    newImg.onload = () => setBgImg(newImg.src);
    newImg.src = props.hdrImage;
    
    return () => {
      newImg.onload = null;
    }
  }, [bgImg, props.hdrImage]);

  let element =
    <div className='sticky-layout about-me'>
      <header className='sticky-child'
        style={hdrStyles}>
        <div className='title'>
          {props.title}
        </div>
      </header>

      <main ref={showOnScroll} className='main-content'>
        {props.content}
      </main>
      <footer>
        {props.footer}
      </footer>
    </div>;

  return (
    <>
      {element}
    </>
    
  );
}

export default Content;