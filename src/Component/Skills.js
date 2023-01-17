
import React from 'react'
import styles  from "./style.module.css";
export default function Skills() {
  return (
    <>
    <h2> My skills :-</h2>
    <h3>HTML</h3>
<div className={styles.container}>
  {/* <div className="skills html">90%</div> */}
  <div style={ {width: "90%", background:"#04AA6D"}}>.</div>

</div>

<h3>CSS</h3>
<div className={styles.container}>
  <div style={{width: "80%",background: "#2196F3"}}>.</div>
</div>

<h3>JavaScript</h3>
<div className={styles.container}>
  <div style={{width: "70%",background: "#f44336"}}>.</div>
</div>

<h3>REACT</h3>
<div className={styles.container}>
  <div style={{width: "65%",background: "#808080"}}>.</div>
</div>
 
 <h3>TAILWIND CSS</h3>
<div className={styles.container}>
  <div style={{width: "80%",background: "purple"}}>.</div>
</div>

<h3>C++</h3>
<div className={styles.container}>
  <div style={{width: "90%",background: "pink"}}>.</div>
</div>


    </>
  )
}
