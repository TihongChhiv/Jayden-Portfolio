import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import { FaBars } from 'react-icons/fa6'
import { FaMoon, FaSun } from 'react-icons/fa'

function Navbar() {

  const [isToggled, setToggle] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const handleToggle = () => {
    setToggle(!isToggled)
  }

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
    setToggle(false)
  }

  // Apply dark mode to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode")
    } else {
      document.body.classList.remove("dark-mode")
    }
  }, [darkMode])

  return (
    <nav>
      <div className={styles.container}>

        <div className={styles.nav_con}>

          <div className={styles.logo}>
            <a onClick={() => scrollTo("about")}>JAYDEN</a>
          </div>

          <ul>
            <li onClick={() => scrollTo("about")}>About</li>
            <li onClick={() => scrollTo("skills")}>Skill</li>
            <li onClick={() => scrollTo("projects")}>Project</li>
            <li onClick={() => scrollTo("contact")}>Contact</li>
          </ul>

          {/* DARK MODE BUTTON */}
          <div
            className={styles.theme_btn}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </div>

        </div>

        {/* MOBILE MENU */}
        <FaBars className={styles.bars} onClick={handleToggle} />

        {isToggled && (
          <>
            <ul className={styles.mobile_menu}>
              <li onClick={() => scrollTo("about")}>About</li>
              <li onClick={() => scrollTo("skills")}>Skill</li>
              <li onClick={() => scrollTo("projects")}>Project</li>
              <li onClick={() => scrollTo("contact")}>Contact</li>
            </ul>

            {/* MOBILE DARK MODE */}
            <div
              className={styles.mobile_theme_btn}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </div>
          </>
        )}

      </div>
    </nav>
  )
}

export default Navbar
