import React from 'react';
import './Navbar.css';
import git from '../../image/git.png'
import name from '../../image/name.png'
import gmail from '../../image/gmail.png'
import linked from '../../image/linked.png'

function Navbar(){
    return(
        <div className='navbar'>
        <img src={name} className='name' alt=''></img>
        <div className='flexImages'>
        <a href='https://github.com/lcsnaufal'>
        <img src={git} alt='' className='images'></img>
        </a>
        <img src={gmail} alt='' className='images'></img>
        <img src={linked} alt='' className='images'></img>
        </div>
        </div>       
    )
};

export default Navbar;