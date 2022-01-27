import React, { useState, useEffect, useCallback } from 'react';
import useMediaQuery from './useMediaQuery';
import { Link } from 'react-router-dom';

// Navbar toggle states. I wanted to organize the modifications so that I don't get lost easily.
const toggleState = {
    default: {
        styles: {
            arrowRotate: '',
            marginLeft: '0px',
            marginTop: '0px'
        }
    },

    open: {
        toggled: true,
        styles: {
            arrowRotateVertical: 0,
            arrowRotateHorizontal: 90,
            marginLeft: '0vw',
            marginTop: '0vh'
        }
    },

    closed: {
        toggled: false,
        styles: {
            arrowRotateVertical: 180,
            arrowRotateHorizontal: 270,
            marginLeft: '-20vw',
            marginTop: '-25vh'
        }
    }
}

// Imma use this for reference.
const screenSizes = {
    mob: {min: 320, max: 480},
    tab: { min: 481, max: 768},
    lap: { min: 769, max: 1024},
    des: { min: 1025, max: 1200}
}

// Containers
function Navbar(props) {
    const [open, setOpen] = useState(false);
    const forDesktop = useMediaQuery('(min-width: 1025px)');
    // const forTablets = useMediaQuery('(max-width: 1025px) and (min-width: 804px)');
    const forPhones = useMediaQuery('(max-width: 804px)');
    // const forMobileDevices = useMediaQuery('(max-width: 1025px)'); //from phones to tablets.

    // margin-left and margin-top get mixed up when changing screen sizes so I thought 
    // I have to remove conflicting styles every time the screen size changes.
    const revertConflictingStyles = useCallback(() => {
        let contents = document.getElementById('navbar-contents');
        let state = toggleState.default.styles;
        contents.style.marginTop = state.marginTop;
        contents.style.marginLeft = state.marginLeft;
    }, []);

    const changeStateTo = useCallback((state) => {
        state = state.styles;
        let contents = document.getElementById('navbar-contents');
        let toggleArrow = document.getElementById('toggler');

        if (forPhones) {
            contents.style.marginTop = state.marginTop;
            toggleArrow.style.transform = `rotateZ(${state.arrowRotateHorizontal}deg)`;
        } else {
            contents.style.marginLeft = state.marginLeft;
            toggleArrow.style.transform = `rotateY(${state.arrowRotateVertical}deg)`;
        }

    },[ forPhones ]);

    // When the state and the styles are not in sync, user have to click once more 
    // just to sync it again. This callback handles that bug.
    const syncNavbarState = useCallback((isOpen = open) => {
        let state = (!isOpen) ? toggleState.closed : toggleState.open;
        changeStateTo(state);
        // setOpen(open);
    }, [ changeStateTo, open ])

    // //close navbar on startup if device width is equals to that of a tablet or less.
    // useEffect(() => {
    //     // openNavbar(!forMobileDevices);

    //     // revertConflictingStyles();
    //     // syncNavbarState();
    // }, []);

    // Side effect for when the screen size change.
    useEffect(() => {
        revertConflictingStyles();
        syncNavbarState();
    }, [ revertConflictingStyles, syncNavbarState, forDesktop ]);

    let toggleNavbar = () => {
        let state = (open) ? toggleState.closed : toggleState.open;
        changeStateTo(state);
        setOpen(state.toggled);
    }

    // let openNavbar = (isOpen) => {
    //     let state = (!isOpen) ? toggleState.closed : toggleState.open;
    //     changeStateTo(state);
    //     setOpen(isOpen);
    // }

    return (
        <div id='navbar' className='navbar'>
            <div id='navbar-contents' className='contents'>
                {props.children}
            </div>

            <div className='navbar-toggler'>
                <SmartIcon
                    clickHandler={toggleNavbar}
                    id='toggler' 
                    src={require('./res/icons/backicon.png')} 
                    alt={'Arrow'}/>
                <div className='tog-section top'>
                    {props.TogglerTop}
                </div>

                <div className='tog-section'>
                    {props.TogglerCenter}
                </div>

                <div className='tog-section bottom'>
                    {props.TogglerBottom}
                </div>
            </div>
        </div>
    );
}

function NavSection(props) {
    return (
        <div className='nav-section'>
            {props.children}
        </div>
    );
}

/**
 * Has Built-in style.
 * className: 'nav-buttons'
 * button styles: & > a, & > .nav-button
 * 
 * @param {} props 
 * @returns 
 */
function NavButtons(props) {
    return (
        <nav className='nav-buttons'>
            {props.children}
        </nav>
    );
}


//I created this before knowing about CSS pseudo elements.
function NavButton(props) {
    return (
        <div className='nav-button'>
            <div className='ani-bg'></div>
            <Link to={props.to}>{props.children}</Link>
        </div>
    );
}

// TODO: 'Move this to another js file.';
/**
 * ClassName:  clicky-icon
 * Accepted Props:
 * src              =>  icon src
 * alt              =>  what display if no icon?
 * href             =>  redirect path/url
 * target           =>  you know what's up.
 * clickHandler     =>  what do?
 * 
 * @param { src, alt, href, clickHandler, target } props 
 * @returns elements duh.
 */
function SmartIcon(props) {
    // Images stretch on ios without div wrapper. Sucks.
    return (
        <div className='smart-icon'>
            <a 
            id={props.id}
            target={props.target} res='noreffer' 
            onClick={props.clickHandler} 
            href={props.href || '#'}
            >

                <img 
                    src={props.src} 
                    alt={props.alt}
                />  
            </a>
        </div>
            
    );
}

export { Navbar, NavSection, NavButtons, NavButton, SmartIcon };