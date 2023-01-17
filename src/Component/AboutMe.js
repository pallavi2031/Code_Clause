import React from 'react'
import styles  from "./style.module.css";
import image from "../image/attractive-professional-woman-office-portrait-middle-aged-executive-businesswoman-standing-workstation-front-desk-73182339.jpg"
export default function AboutMe() {
  return (
    <>
    <div >
      <img src={image} alt=""  className={styles.profe}/>
    </div>
    <div className={styles.Aboutme}>
    
     <h3>
     HELLO, I'M PALLAVI GUPTA.
     <br/>
     <br/>
    I'M PURSUING B.TECH FROM IIIT LUCKNOW.
    <br/>
      CODING AND DEVELOPMENT IN MY PASSION.
      <br/>
      I ENJOY A LOT DOING CODING AND WORKING
      <br/> 
      ON MANY INTERESTING PROJECTS.
      <br/>
    I 'M VERY CURIOUS TO LEARN NEW   THINGS.
    <br/>
   I LOVE HELP TO PEOPLE.
    <br/>
    AND THIS IS MY PORTFOLIO.
     </h3>
    </div>
    </>
  )
}

