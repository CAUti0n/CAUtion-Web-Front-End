import React from 'react'

// Component
import Nav from '../../Components/Nav'

// Styles
import styles from './styles/Home.module.css'

const Home = () => {
  return (
    <div>

      <Nav />

      <div className={styles.home_container}>
        <h1>Home</h1>
      </div>
    </div>
  )
}

export default Home
