import React from 'react'
import styles from './Contact.module.css'
import { FaPhone, FaEnvelope } from 'react-icons/fa6'

function Contact() {
  return (
    <div className={styles.contact_wrapper}>
        <div className={styles.contact_con}>
            <div className={styles.contact_info}>
                <h3> Get in touch</h3>
                <p className={styles.contact_desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta id, blanditiis odio consectetur tenetur, sit recusandae dignissimos <br />laboriosam vitae quasi dolorem nihil nam! Nostrum veniam tenetur at, praesentium ullam vero.
                </p>
                <p className={styles.contact_address}>
                    BangBo , Bang SaoThong <br />
                    Samutprakan, Thailand
                </p>
                <p> <FaPhone/> (+66) 63 6746745 </p>
                <p> <FaEnvelope/> chhivtihong23@gmail.com </p>
            </div>
        </div>
    </div>
  )
}

export default Contact
