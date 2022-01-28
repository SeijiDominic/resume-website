import React, {} from 'react';
import Content from './Content';

function Projects(props) {
  return(
    <Content 
      title={'Projects'} hdrImage={require('./res/img/coder-moment.jpg')}
      content = {
        <>
          <h1>My Website</h1>
          <p>
            Website design gets hard the more you make it responsive and compatible to all devices. 
            It was hard but still, I learned a lot about web design and React, and I also made a lot 
            of mistakes that I can now keep an eye on not to repeat once more.
          </p>
        </>
      } 
      
      footer={<div style={{textAlign: 'center', opacity: 0.5}}>More projects to come (???);</div>}/>
  );
}

export default Projects;