import React from 'react'
import { Link } from 'react-router-dom'

// Logo image
// import logo from {process.env.PUBLIC_URL} + '/img/CAUtion_LOGO.png'

// Styles
import styles from './styles/Nav.module.css'

const Nav = () => {
  return (
    <div className={styles.navContainer}>

      {/* Logo */}
      <div className={styles.logo_container}>
        <Link to='/'><img src='img/CAUtion_logo.png'/></Link>
      </div>

      {/* Nav Links */}
      <div className={styles.nav_links_container}>
        <Link to='/' className={styles.nav_link}>Home</Link>
        <Link to='/about' className={styles.nav_link}>About</Link>
        <Link to='/study' className={styles.nav_link}>Study</Link>
        <Link to='/activity' className={styles.nav_link}>Activity</Link>
      </div>

    </div>
  )
}

export default Nav
