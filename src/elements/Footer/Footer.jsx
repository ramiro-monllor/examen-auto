import React from 'react'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.contCredits}>
            <h5>Hecho y diseñado por:</h5>
            <h5>Ramiro Monllor 🚀 | Facundo Monllor ❤</h5>
        </div>
        <div className={styles.contLink}>
          <a style={{textDecoration:"none",color:"white"}} href="https://www.linkedin.com/in/ramiro-monllor/">Ramiro <img src="https://res.cloudinary.com/dkbp6rk0s/image/upload/v1681614677/linkedin_bbpfar.png" alt="logo linkedin" width="14" height="14" className={styles.imgLinkedin}/></a>
          <a style={{textDecoration:"none",color:"white"}} href="https://www.linkedin.com/in/facundo-monllor/">Facundo <img src="https://res.cloudinary.com/dkbp6rk0s/image/upload/v1681614677/linkedin_bbpfar.png" alt="logo linkedin" width="14" height="14" className={styles.imgLinkedin}/></a>
        </div>
    </div>
  )
}
