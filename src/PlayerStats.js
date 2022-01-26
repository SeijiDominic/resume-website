import React, { useContext, useEffect, useState } from 'react';


let MaxLevel = React.createContext(5);

function PlayerStats(props) {
  return (
    <MaxLevel.Provider value={props.maxLevel}>
      {props.children}
    </MaxLevel.Provider>
  );
}

function SkillSet(props) {
  let [ skills ] = useState(props.skills);
  let [ skillElems, setSkillElems ] = useState(null);

  useEffect(() => {
    setSkillElems(skills.map(skill => <Skill key={skill.id} name={skill.name} level={skill.level} />));
  }, [skills]);

  return (
    <div className='skill-cat'>
      <h1>{props.category}</h1>
      <div className='skill-set'>
        { skillElems }
      </div>
    </div>
    
  );
}

function Skill(props) {
  return (
    <div className='skill'>
      <div className='skill-name'>{props.name}</div>
      <div className='mid-pad'></div>
      <Gague level={props.level}/>
    </div>
  );
}

function Gague(props) {
  let maxPills = useContext(MaxLevel);
  let [pills, setPills] = useState(new Array(maxPills).fill(false));
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

    setPillArray(pills.map(pill => <Pill active={pill} />));
  }, [ pills, activePills ]);

  useEffect(() => {
    console.log(pills.map(pill => <Pill active={pill} />));
  });

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

export { PlayerStats, SkillSet };