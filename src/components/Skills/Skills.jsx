import React from 'react'
import styles from './Skills.module.css'
import {FaReact, FaGitAlt, FaNode, FaAws} from 'react-icons/fa6'

function Skills() {
  return (
    <div className={styles.skills_con}>
      <h3 className={styles.skills_title}> My Skill Set</h3>
      <ul className={styles.skills_list}>
        <li>
            <FaReact />
        </li>
        <li>
            <FaGitAlt />
        </li>
        <li>
            <FaNode />
        </li>
        <li>
            <FaAws />
        </li>
      </ul>

    </div>
  )
}

export default Skills
