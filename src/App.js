import { Navbar, NavSection, NavButtons, NavButton, SmartIcon } from './Navbar';

//L8r Alig8r
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Content from './Content';
import { TapNavigator, TapElem } from './TapNavigator';
import Welcome from './Welcome';

function App() {

  return (
    <Router>
      <div className='left'>
        <Navbar 
        TogglerBottom={
          <>
            <SmartIcon 
                target='_blank' res='noreffer' 
                src={require('./res/icons/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png')}
                href={'https://github.com/SeijiDominic'}
            />

            <SmartIcon 
                target='_blank' 
                src={require('./res/icons/LinkedIn-Logos/LI-In-Bug.png')}
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

      <div className='right'>
        <Routes>
          <Route path='/' element={<Welcome animatableHTML={
            <>
              <div>Welcome to my page!</div>
            </>
          }/>}/>        
          <Route path='/about-me' element={<AboutMe />}/>        
          <Route path='/projects' element={<Projects />}/>        
          <Route path='/credits' element={<Credits />}/>        
        </Routes>
      </div>
    </Router>
  );
}
function AboutMe() {
  return (
    <Content title={'About Me'}>
      <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et nulla a ex dictum finibus in ac est. 
          Etiam sit amet vulputate nunc, non eleifend ipsum. Maecenas luctus feugiat bibendum. Quisque id purus ac 
          elit congue ullamcorper. Cras eu sapien nulla. Phasellus malesuada mi id odio vehicula elementum. Aliquam 
          velit urna, efficitur eu consequat et, auctor nec nunc. Suspendisse ut laoreet enim. Quisque sit amet velit 
          venenatis nisl gravida tempor. 
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et nulla a ex dictum finibus in ac est. 
          Etiam sit amet vulputate nunc, non eleifend ipsum. Maecenas luctus feugiat bibendum. Quisque id purus ac 
          elit congue ullamcorper. Cras eu sapien nulla. Phasellus malesuada mi id odio vehicula elementum. Aliquam 
          velit urna, efficitur eu consequat et, auctor nec nunc. Suspendisse ut laoreet enim. Quisque sit amet velit 
          venenatis nisl gravida tempor. 
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et nulla a ex dictum finibus in ac est. 
          Etiam sit amet vulputate nunc, non eleifend ipsum. Maecenas luctus feugiat bibendum. Quisque id purus ac 
          elit congue ullamcorper. Cras eu sapien nulla. Phasellus malesuada mi id odio vehicula elementum. Aliquam 
          velit urna, efficitur eu consequat et, auctor nec nunc. Suspendisse ut laoreet enim. Quisque sit amet velit 
          venenatis nisl gravida tempor. 
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et nulla a ex dictum finibus in ac est. 
          Etiam sit amet vulputate nunc, non eleifend ipsum. Maecenas luctus feugiat bibendum. Quisque id purus ac 
          elit congue ullamcorper. Cras eu sapien nulla. Phasellus malesuada mi id odio vehicula elementum. Aliquam 
          velit urna, efficitur eu consequat et, auctor nec nunc. Suspendisse ut laoreet enim. Quisque sit amet velit 
          venenatis nisl gravida tempor. 
        </p>
    </Content>

    
  );
}

function Projects(props) {
  return(
    <Content title={'Projects'}>
      <TapNavigator>
        <TapElem>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et nulla a ex dictum finibus in ac est. 
            Etiam sit amet vulputate nunc, non eleifend ipsum. Maecenas luctus feugiat bibendum. Quisque id purus ac 
            elit congue ullamcorper. Cras eu sapien nulla. Phasellus malesuada mi id odio vehicula elementum. Aliquam 
            velit urna, efficitur eu consequat et, auctor nec nunc. Suspendisse ut laoreet enim. Quisque sit amet velit 
            venenatis nisl gravida tempor. 
          </p>
        </TapElem>
        <TapElem>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et nulla a ex dictum finibus in ac est. 
            Etiam sit amet vulputate nunc, non eleifend ipsum. Maecenas luctus feugiat bibendum. Quisque id purus ac 
            elit congue ullamcorper. Cras eu sapien nulla. Phasellus malesuada mi id odio vehicula elementum. Aliquam 
            velit urna, efficitur eu consequat et, auctor nec nunc. Suspendisse ut laoreet enim. Quisque sit amet velit 
            venenatis nisl gravida tempor. 
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et nulla a ex dictum finibus in ac est. 
            Etiam sit amet vulputate nunc, non eleifend ipsum. Maecenas luctus feugiat bibendum. Quisque id purus ac 
            elit congue ullamcorper. Cras eu sapien nulla. Phasellus malesuada mi id odio vehicula elementum. Aliquam 
            velit urna, efficitur eu consequat et, auctor nec nunc. Suspendisse ut laoreet enim. Quisque sit amet velit 
            venenatis nisl gravida tempor. 
          </p>
        </TapElem>
        <TapElem>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et nulla a ex dictum finibus in ac est. 
            Etiam sit amet vulputate nunc, non eleifend ipsum. Maecenas luctus feugiat bibendum. Quisque id purus ac 
            elit congue ullamcorper. Cras eu sapien nulla. Phasellus malesuada mi id odio vehicula elementum. Aliquam 
            velit urna, efficitur eu consequat et, auctor nec nunc. Suspendisse ut laoreet enim. Quisque sit amet velit 
            venenatis nisl gravida tempor. 
          </p>
        </TapElem>
        <TapElem>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et nulla a ex dictum finibus in ac est. 
            Etiam sit amet vulputate nunc, non eleifend ipsum. Maecenas luctus feugiat bibendum. Quisque id purus ac 
            elit congue ullamcorper. Cras eu sapien nulla. Phasellus malesuada mi id odio vehicula elementum. Aliquam 
            velit urna, efficitur eu consequat et, auctor nec nunc. Suspendisse ut laoreet enim. Quisque sit amet velit 
            venenatis nisl gravida tempor. 
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et nulla a ex dictum finibus in ac est. 
            Etiam sit amet vulputate nunc, non eleifend ipsum. Maecenas luctus feugiat bibendum. Quisque id purus ac 
            elit congue ullamcorper. Cras eu sapien nulla. Phasellus malesuada mi id odio vehicula elementum. Aliquam 
            velit urna, efficitur eu consequat et, auctor nec nunc. Suspendisse ut laoreet enim. Quisque sit amet velit 
            venenatis nisl gravida tempor. 
          </p>
        </TapElem>
      </TapNavigator>
    </Content>
  );
}

function Credits(props) {
  return (
    <Content title={'Credits'}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et nulla a ex dictum finibus in ac est. 
        Etiam sit amet vulputate nunc, non eleifend ipsum. Maecenas luctus feugiat bibendum. Quisque id purus ac 
        elit congue ullamcorper. Cras eu sapien nulla. Phasellus malesuada mi id odio vehicula elementum. Aliquam 
        velit urna, efficitur eu consequat et, auctor nec nunc. Suspendisse ut laoreet enim. Quisque sit amet velit 
        venenatis nisl gravida tempor. 
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et nulla a ex dictum finibus in ac est. 
        Etiam sit amet vulputate nunc, non eleifend ipsum. Maecenas luctus feugiat bibendum. Quisque id purus ac 
        elit congue ullamcorper. Cras eu sapien nulla. Phasellus malesuada mi id odio vehicula elementum. Aliquam 
        velit urna, efficitur eu consequat et, auctor nec nunc. Suspendisse ut laoreet enim. Quisque sit amet velit 
        venenatis nisl gravida tempor. 
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et nulla a ex dictum finibus in ac est. 
        Etiam sit amet vulputate nunc, non eleifend ipsum. Maecenas luctus feugiat bibendum. Quisque id purus ac 
        elit congue ullamcorper. Cras eu sapien nulla. Phasellus malesuada mi id odio vehicula elementum. Aliquam 
        velit urna, efficitur eu consequat et, auctor nec nunc. Suspendisse ut laoreet enim. Quisque sit amet velit 
        venenatis nisl gravida tempor. 
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et nulla a ex dictum finibus in ac est. 
        Etiam sit amet vulputate nunc, non eleifend ipsum. Maecenas luctus feugiat bibendum. Quisque id purus ac 
        elit congue ullamcorper. Cras eu sapien nulla. Phasellus malesuada mi id odio vehicula elementum. Aliquam 
        velit urna, efficitur eu consequat et, auctor nec nunc. Suspendisse ut laoreet enim. Quisque sit amet velit 
        venenatis nisl gravida tempor. 
      </p>
    </Content>
  );
}

export default App;
