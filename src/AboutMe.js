import React, { useEffect, useMemo, useState } from 'react';
import Content from './Content';
import { TitledContainer, ReverseC } from './CustContainers';
import { PlayerStats, SkillSet } from './PlayerStats';

const skills = [
  
  {id: 1, name: "Java", level: 5},
  {id: 2, name: "JavaScript", level: 4},
  {id: 3, name: "C#", level: 3},
  {id: 4, name: "HTML5", level: 5},
  {id: 5, name: "CSS3", level: 4},
  {id: 6, name: "SASS", level: 4},
  {id: 7, name: "ReactJS", level: 4}
];




function AboutMe(props) {
  let hdrStyles = {
    background: `no-repeat 60% 30%/180% url(${require('./res/img/burrito-dog.jpg')})`
  };

  // useEffect(() => {
  //   console.log(hdrStyles)
  // }, [hdrStyles])

  return (
    <div className='sticky-layout about-me'>
      <header className='sticky-child'
       style={hdrStyles}>
        <div className='title'>
          About Me
        </div>
      </header>
      {/* <div className='sticky-child'>
        <PlayerStats maxLevel={5}>
          <SkillSet title={"Skills"} skills={skills}/>
        </PlayerStats>
      </div> */}

      <main className='main-content'>
        <h1>Education</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et nulla a ex dictum finibus in ac est. 
          Etiam sit amet vulputate nunc, non eleifend ipsum. Maecenas luctus feugiat bibendum. Quisque id purus ac 
          elit congue ullamcorper. Cras eu sapien nulla. Phasellus malesuada mi id odio vehicula elementum. Aliquam 
          velit urna, efficitur eu consequat et, auctor nec nunc. Suspendisse ut laoreet enim. Quisque sit amet velit 
          venenatis nisl gravida tempor. 
        </p>

        <h1>Job Experience</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et nulla a ex dictum finibus in ac est. 
          Etiam sit amet vulputate nunc, non eleifend ipsum. Maecenas luctus feugiat bibendum. Quisque id purus ac 
          elit congue ullamcorper. Cras eu sapien nulla. Phasellus malesuada mi id odio vehicula elementum. Aliquam 
          velit urna, efficitur eu consequat et, auctor nec nunc. Suspendisse ut laoreet enim. Quisque sit amet velit 
          venenatis nisl gravida tempor. 
        </p>
      </main>
      <footer>
        This foot
      </footer>
    </div>
  );

  // return element;
}

// function ContentSection(props) {
//   return (
//     <>
//       <h1>{props.title}</h1>
//     </>
//   );
// }

function BiteSize(props) {
  return (
    <div className='bite-size' >
      <img className='avatar' src={props.src} alt='User Avatar' />
      <div className='info-container'>
        <div className='info'>
          <h1>{props.userName}</h1>
          <h2>{props.userTitle}</h2>
        </div>
      </div>
      
    </div>
  );
}


export default AboutMe;