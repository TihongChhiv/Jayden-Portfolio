import React from 'react'
import styles from './Skills.module.css'
import {
  FaReact,
  FaGitAlt,
  FaNode,
  FaAws
} from 'react-icons/fa6'

import { SiMongodb, SiSwift } from 'react-icons/si'

function Skills() {
  return (
    <div id="skills" className={styles.skills_con}>

      <h3 className={styles.skills_title}>My Skill Set</h3>

      <ul className={styles.skills_list}>
        <li><FaReact /></li>
        <li><FaNode /></li>
        <li><SiMongodb /></li>
        <li><FaGitAlt /></li>
        <li><FaAws /></li>
        <li><SiSwift /></li>
      </ul>

    </div>
  )
}

export default Skills
