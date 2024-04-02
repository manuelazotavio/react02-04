import React from 'react'
import styles from './Footer.module.css'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>

      <p><span>Projeto 1</span> &copy; 2024</p>
    </footer>
  )
}

export default Footer
