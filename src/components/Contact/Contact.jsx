import React from 'react'
import styles from './Contact.module.css'
import { FaPhone, FaEnvelope } from 'react-icons/fa6'

function Contact() {
  return (
    <div id="contact" className={styles.contact_wrapper}>
      <div className={styles.contact_con}>

        <div className={styles.contact_info}>
          <h3>Get in touch</h3>

          <p className={styles.contact_desc}>
            I'm actively seeking software engineering internship opportunities and eager to gain real-world experience while continuously improving my technical skills.
          </p>

          <p className={styles.contact_address}>
            Bangkok, Thailand
          </p>

          <p><FaPhone /> (+66) 63 6746745</p>
          <p><FaEnvelope /> chhivtihong23@gmail.com</p>

        </div>

      </div>
    </div>
  )
}

export default Contact
