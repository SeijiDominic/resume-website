import React, { } from 'react';
import Content from './Content';
import { Institutuion, PlayerStat } from './PlayerStats';

function Credits(props) {
  return (
    <Content title={'Credits'} hdrImage={require('./res/img/ape-together-strong.jpg')}>
      {/* <Institutuion 
      name='Sheridan College' 
      course='Software Development and Network Engineering' 
      startYear={2020} endYear={2023}  /> */}

      <PlayerStat name='Education'>
        <Institutuion
          name='Sheridan College'
          course='Software Development and Network Engineering'
          startYear={2020} endYear={2023} />
      </PlayerStat>
    </Content>
  );
}

export default Credits;