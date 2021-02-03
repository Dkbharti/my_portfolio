import React from 'react'
import styles from './Header.module.css'
import {Link} from 'react-scroll';

export default function Header() {
  return (
    <div>
      <nav>
        <ul type='none'>
          <Link activeClass='active' to='home'spy={true} smooth={true} offset={0}duration={500}>Home</Link>
          <Link activeClass='active'to='about' spy={true} smooth={true}  offset={0}  duration={500}>About</Link>
          <Link activeClass='active'to='resume' spy={true} smooth={true} offset={0}  duration={500}>Resume</Link>
          <Link activeClass='active'to='works' spy={true} smooth={true} offset={0}  duration={500}>Works</Link>
          <Link activeClass='active'to='testimonials' spy={true} smooth={true} offset={0}  duration={500}>Testimonials</Link>
          <Link activeClass='active'to='contact' spy={true} smooth={true} offset={0}  duration={500}>Contact</Link>          
        </ul>
      </nav>
    </div>
  )
}
