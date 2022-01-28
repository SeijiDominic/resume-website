import React from 'react';

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
const Credits = React.lazy(() => import('./Credits'));

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
                  <NavButton to='/credits'>Credits</NavButton>
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
      <TransitionGroup className={props.className}>
        <CSSTransition 
          key={location.pathname}
          classNames="fade"
          timeout={300}
        >
          <Routes location={location}>
            <Route path='/' element={<Welcome animatableHTML={
              <>
                <div>Welcome</div>
              </>
            }/>}/>        
            <Route path='/about-me' element={<AboutMe />}/>        
            <Route path='/projects' element={<Projects />}/>        
            <Route path='/credits' element={<Credits />}/>        
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </React.Suspense>
  );
}






export default App;
