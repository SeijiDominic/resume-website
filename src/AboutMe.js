import React, { useEffect, useMemo, useState } from 'react';
import Content from './Content';
import { TitledContainer, ReverseC } from './CustContainers';
import { PlayerStat, Institutuion, PlayerStats, SkillSet } from './PlayerStats';

// I'd try to make a simple api I can deploy on heroku 
// once I am content with how the app's overall looks look.
const skills = [
  { id: 1, name: "Java", level: 5} ,
  { id: 2, name: "JavaScript", level: 4 },
  { id: 3, name: "C#", level: 2 },
  { id: 4, name: "HTML5", level: 5 },
  { id: 5, name: "CSS3", level: 4 },
  { id: 6, name: "SASS", level: 4 },
  { id: 7, name: "React", level: 4 },
  { id: 8, name: "Spring", level: 4 },
  { id: 9, name: "Git", level: 4 },
  { id: 10, name: "Windows", level: 4},
  { id: 11, name: "Linux", level: 3 },
  { id: 12, name: "NodeJS", level: 2 },
  { id: 13, name: "SQL", level: 3 }
];

function AboutMe(props) {
  let hdrStyles = {
    background: `no-repeat 50% 50%/100% url(${require('./res/img/burrito-dog.jpg')})`
  };

  return (
    <Content title='About Me' hdrImage={require('./res/img/burrito-dog.jpg')} 
      content = {
        <>
          <section>
            <PlayerStat name="Education">
              <Institutuion
                name='Sheridan College'
                course='Software Development and Network Engineering'
                startYear={2020} endYear={2023} />
            </PlayerStat>
          </section>

          
          <section>
            <PlayerStat name='Skills' className={'skill-list'}>
              <SkillSet 
                skills={skills}
                childClass='neon-container' />          
            </PlayerStat>
          </section>
        </>
        
      }
    />
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