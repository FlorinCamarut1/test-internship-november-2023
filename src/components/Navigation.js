import React from 'react';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <header>
      <p className={styles}>Logo</p>
      <nav>
        <ul>
          <li>
            <Link className={styles.links} to='/'>
              HOME
            </Link>
          </li>
          <li>
            <Link className={styles.links} to='/about'>
              About
            </Link>
          </li>
          <li>
            <Link className={styles.links} to='/contact'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;