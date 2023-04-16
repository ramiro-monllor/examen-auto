import React from 'react'
import styles from './Home.module.css'

import { FaAngleDoubleRight, FaCarAlt, FaMotorcycle, FaTruck } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Footer } from '../../elements/Footer/Footer';

export const Home = () => {
  return (
    <div>
      
      <div className={styles.contNav}>
        <div className={styles.contTitle}>
          <h1 className={styles.title}>Test de conducción Vial 🚗</h1>
        </div>
        <div className={styles.contLink}>
          <a style={{textDecoration:"none",color:"white"}} href="https://www.linkedin.com/in/ramiro-monllor/">Ramiro<img src="https://res.cloudinary.com/dkbp6rk0s/image/upload/v1681614677/linkedin_bbpfar.png" alt="logo linkedin" width="14" height="14" className={styles.imgLinkedin}/></a>
          <a style={{textDecoration:"none",color:"white"}} href="https://www.linkedin.com/in/facundo-monllor/">Facundo<img src="https://res.cloudinary.com/dkbp6rk0s/image/upload/v1681614677/linkedin_bbpfar.png" alt="logo linkedin" width="14" height="14" className={styles.imgLinkedin}/></a>
        </div>
      </div>

        <div className={styles.separador}></div>

        <Link to="/auto">
          <div className={styles.divtipoexamen}>
            <div className={styles.divTextoA}>
                <h2>Automotor</h2>
              <FaCarAlt color="white" fontSize="large" />
            </div>
            
            <div className={styles.divTextoB}>
              <FaAngleDoubleRight color="white" fontSize="large" /> 
            </div>
          </div>
        </Link>

        <div className={styles.divtipoexamenProximamente}>
          <div className={styles.divTextoA}>
            <h2>Motocicleta</h2>
            <FaMotorcycle color="white" fontSize="large" />
          </div>
          
          <div className={styles.divTextoB}>
            <FaAngleDoubleRight color="white" fontSize="large" /> 
          </div>
        </div>

        <div className={styles.divtipoexamenProximamente}>
          <div className={styles.divTextoA}>
            <h2>Camiones</h2>
            <FaTruck color="white" fontSize="large" />
          </div>
          
          <div className={styles.divTextoB}>
            <FaAngleDoubleRight color="white" fontSize="large" /> 
          </div>
        </div>

      <Footer />


    </div>
  )
}
