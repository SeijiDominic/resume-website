import React, {} from 'react';
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
  let tempo = 
    <Content title={''}>
      <PlayerStats maxLevel={5}>
        <SkillSet title={"Skills"} skills={skills}/>
      </PlayerStats>
    </Content>;
  return (
    <div className='sticky-layout'>
      <header className='sticky-child'>
        this is header
      </header>
      <div className='sticky-child'>
        <PlayerStats maxLevel={5}>
          <SkillSet title={"Skills"} skills={skills}/>
        </PlayerStats>
      </div>

      <main className='main-content'>
        This main
      </main>
      <footer>
        This foot
      </footer>
    </div>
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