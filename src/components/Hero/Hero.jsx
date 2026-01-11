import React from 'react' 
import styles from './Hero.module.css' 
import{ FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa6' 
import { TypeAnimation } from 'react-type-animation' 
import Tilt from 'react-parallax-tilt' 

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
        <div className={styles.container}>
            <div className={styles.hero_con}>
                <div className={styles.hero_info}>
                    <p className={styles.text_1}> Hey, It's me</p>
                    <h3 className={styles.text_2}> Tihong Chhiv</h3>
                    <p className={styles.text_3}> 
                    <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Aspiring Software Engineer',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Computer Science Student',
                        1000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                    />
        
                    </p>
                    <p className={styles.text_4}>
                    I’m a third-year Computer Science student at Assumption University, <br />pursuing a software engineering path with a strong interest in web development.
                    </p>
                    <ul className={styles.hero_social}>
                        <li><a href="#"><FaGithub/></a></li>
                        <li><a href="#"><FaLinkedin/></a></li>
                        <li><a href="#"><FaInstagram/></a></li>
                    </ul>
                </div>
                <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                    <div className={styles.hero_img}></div>
                </Tilt>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
