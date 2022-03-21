import React, {  useEffect } from 'react';

import { 
  Navbar, 
  NavSection, 
  NavButtons, 
  NavButton, 
  SmartIcon 
} from './Navbar';

import { 
  TransitionGroup,
  CSSTransition
} from 'react-transition-group';

import {
  BrowserRouter as Router,
  Route,
  Routes, 
  useLocation
} from 'react-router-dom';

const Welcome = React.lazy(() => import('./Welcome'));
const AboutMe = React.lazy(() => import('./AboutMe'));
const Projects = React.lazy(() => import('./Projects'));
const Contact = React.lazy(() => import('./Contact'));

//find everything from the content root the elements that has the attribute of ____ and add behaviour to those elements
// useEffect(() => {
//   document.querySelector()
// }, []);

function App() {
  return (
    <Router>
      <div className='left'>
        <Navbar 
        TogglerBottom={
          <>
            <SmartIcon 
                target='_blank' res='noreffer' 
                src={require('./res/icons/GitHub-Mark/PNG/GitHub-Mark-Green-64px.png')}
                href={'https://github.com/SeijiDominic'}
            />

            <SmartIcon 
                target='_blank' 
                src={require('./res/icons/LinkedIn-Logos/LI-In-Bug-green.png')}
                href={'https://www.linkedin.com/in/seiji-bautista/'}
            />
          </>
            
        }>
          <NavSection>
              <NavButtons>
                  <NavButton to='/about-me'>About me</NavButton>
                  <NavButton to='/projects'>Projects</NavButton>
              <NavButton to='/contact'>Contact</NavButton>
              </NavButtons>
          </NavSection>
        </Navbar>
      </div>

      <AnimatedRoutes className='right' />
        
    </Router>
  );
}

function AnimatedRoutes(props) {
  let location = useLocation()
  return (
    <React.Suspense fallback={<div>Loading</div>}>
      <div className={props.className}>
        <Routes location={location}>
          <Route path='/' element={<Welcome animatableHTML={
            <>
              <div>Welcome</div>
            </>
          }/>}/>        
          <Route path='/about-me' element={<AboutMe />}/>        
          <Route path='/projects' element={<Projects />}/>        
          <Route path='/contact' element={<Contact />}/>        
        </Routes>
      </div>
    </React.Suspense>
  );
}






export default App;
