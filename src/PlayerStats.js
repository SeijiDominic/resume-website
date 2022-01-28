import React, { useContext, useEffect, useState } from 'react';

// Today I finally was able to use context hook and the map function
let MaxLevel = React.createContext(5);

function PlayerStats(props) {
  return (
    <MaxLevel.Provider value={props.maxLevel}>
      {props.children}
    </MaxLevel.Provider>
  );
}

function PlayerStat(props) {

  return (
    <div className='player-stat'>
      <div className='stat-name'>
        <h1>{props.name}</h1>
      </div>

      <div className={'stat-elems ' + props.className}>
        {props.children}
      </div>
    </div>
  );
}

function Institutuion(props) {
  let [ statusMesg, setStatusMesg ] = useState(null);
  let [ status, setStatus ] = useState(null);


  useEffect(() => {
    let thisYear = (new Date()).getFullYear();
    if (props.endYear !== null && props.endYear > thisYear) {
      setStatusMesg('EXPECTED');
    }

    if (statusMesg !== null) {
      setStatus(<span className='status'>{statusMesg}</span>);
    }

  }, [ props.endYear, statusMesg ]);

  return (
    <div className='institution neon-container'>
      <div className='stat-list'>{status}</div>
      
      <div className='gen-info'>
        <h2>{props.name}</h2>
        <h3>{props.course}</h3>
      </div>
      

      <div className='bot-info'>
        <div>{props.startYear} ~ {props.endYear}</div>
      </div>
      
    </div>
  );
}

function SkillSet(props) {
  let [ skills ] = useState(props.skills);
  let [ skillElems, setSkillElems ] = useState(null);

  useEffect(() => {
    setSkillElems(skills.map(skill => 
      <Skill key={skill.id} name={skill.name} level={skill.level} />
    ));
  }, [skills]);

  return (
    // <div className='skill-cat'>
      
    //   <div className='skill-set'>
    //     { skillElems }
    //   </div>
    // </div>

    <>
      {skillElems}
    </>
    
  );
}

function Skill(props) {
  return (
    <div className={`skill neon-container ${props.className}`}>
      <div className='skill-name'>{props.name}</div>
      <div className='mid-pad'></div>
      <Gague level={props.level}/>
    </div>
  );
}

function Gague(props) {
  let maxPills = useContext(MaxLevel);
  let [ pills, setPills ] = useState(new Array(maxPills).fill(false));
  let [ activePills, setActivePills ] = useState(props.level);
  let [ pillArray, setPillArray ] = useState(null);

  useEffect(() => {
    if (maxPills < activePills) setActivePills(maxPills);
  }, [ maxPills, activePills ]);

  // pills is an array of boolean flags. True = active. 
  // set active pills in this side effect.
  useEffect(() => {
    let temp = pills;
    for (var i = 0; i < activePills; i++) {
      temp[i] = true;
    }
    setPills(temp);

    setPillArray(pills.map((pill, index) => <Pill key={index} active={pill} />));
  }, [ pills, activePills ]);

  

  return (
    <div className='pill-case'>
      { pillArray }
    </div>
  );
}

function Pill(props) {
  let [ isActive ] = useState(props.active);
  let pillActive = (isActive) ? 'active-pill' : '';
  let [ classList ] = useState(`dead-pill ${pillActive}`);
  let [ elem ] = useState(<span className={classList}></span>);

  return elem;
}

export { PlayerStats, SkillSet, Institutuion, PlayerStat };