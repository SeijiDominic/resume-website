import React, {} from 'react';
import Content from './Content';
import { PlayerStats, SkillSet } from './PlayerStats';

const skills = [
  
  {id: 1, name: "Java", level: 2},
  {id: 2, name: "JavaScript", level: 3},
  {id: 3, name: "C#", level: 4},
  {id: 4, name: "HTML5", level: 5},
  {id: 5, name: "CSS3", level: 5},
  {id: 6, name: "SASS", level: 5},
  {id: 7, name: "ReactJS", level: 3}
];




function AboutMe(props) {
  return (
    <Content title={''}>
      <PlayerStats maxLevel={5}>
        <SkillSet category={'Hard Skills'} skills={skills} />   
      </PlayerStats>
    </Content>
  );
}

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