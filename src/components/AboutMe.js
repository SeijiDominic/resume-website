import React, { useState, useEffect } from 'react';
import Content from './Content';
import { PlayerStat, Institutuion, SkillSet, TitledList } from './PlayerStats';

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
  { id: 13, name: "SQL", level: 3 },
  { id: 14, name: "Rust", level: 4 }
];

function AboutMe(props) {
  return (
    <Content title='About Me' hdrImage={require('../res/img/burrito-dog.jpg')} 
      content = {
        <>
          <BiteSize 
              src={require('../res/img/me-face.jpg')}
              userName='Seiji Akakabe'
              userTitle='Magic Apprentice'
              />

          <TitledList 
            title='Education'
            listItems={
              <Institutuion
                name='Sheridan College'
                course='Software Development and Network Engineering'
                startYear={2020} endYear={2023} />
            }
            />

          <TitledList 
            title='Skills'
            listItems= {
            <SkillSet 
              skills={skills}
              childClass='neon-container' /> }
          />
        </>
        
      }
    />
  );
}

function BiteSize(props) {
  const [avatarImage, setAvatarImage] = useState(null);

  useEffect(() => {
    let img = new Image();
    img.onload = () => setAvatarImage(props.src);
    img.src = props.src;

    return () => {
      img.onload = null;
    }
  });

  return (
    <div className='bite-size neon-container' >
      <img className='avatar' src={avatarImage} alt='User Avatar' />
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