import React from 'react'
import styles from './Projects.module.css'
import Tilt from 'react-parallax-tilt' 

function Projects() {
  return (
    <div className={styles.proj_con}>
        <h3 className={styles.proj_title}>Project</h3>
        <div className={styles.proj_list}>
            <div className={styles.proj_items}>
                <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <p>Project Title</p>
            </div>
            <div className={styles.proj_items}>
                <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <p>Project Title</p>
            </div>
            <div className={styles.proj_items}>
                <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <p>Project Title</p>
            </div>
            <div className={styles.proj_items}>
                <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <p>Project Title</p>
            </div>
            <div className={styles.proj_items}>
                <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <p>Project Title</p>
            </div>
        </div>
    </div>
  )
}

export default Projects
