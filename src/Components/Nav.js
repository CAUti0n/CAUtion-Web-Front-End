import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles/Nav.module.css'

const Nav = () => {
  return (
    <div className={styles.navContainer}>

      {/* Logo */}
      <div className={styles.logo_container}>
        <Link to='/'><img src='img/CAUtion_logo.png' alt='CAUtion_logo' /></Link>
      </div>

      {/* Nav Links */}
      <div className={styles.nav_links_container}>
          <Link to='/management'>Management</Link>
          <Link to='/study' >Study</Link>
          <Link to='/activity'>Activity</Link>
          <Link to='/Recruit'>Recruit</Link>
      </div>

    </div>
  )
}

export default Nav
