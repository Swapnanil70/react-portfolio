import React, {useState} from 'react'
import styles from './Navbar.module.css'

import { getImageUrl } from '../../utils';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <a href="/" className={styles.title}>
            Portfolio
        </a>
        <div className={styles.menu}>
            <ul className={styles.menuItems}>
                <li>
                    {/* This href navigates to the class or id which is targeted */}
                    <a href="#about">About</a>
                </li>
                <li>
                    {/* This href navigates to the class or id which is targeted */}
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    {/* This href navigates to the class or id which is targeted */}
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    {/* This href navigates to the class or id which is targeted */}
                    <a href="#Contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
