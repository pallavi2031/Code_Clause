import React from 'react'
import styles  from "./style.module.css";
import images from "../image/images.jpg";
import image1 from "../image1/portrait-new-generation-young-business-woman-charming-busine-portrait-new-generation-young-business-woman-charming-124765960.jpg";


import { Link } from 'react-router-dom';
import pdf from '.././Pallavi_gupta_resume.pdf'

export default function Navbar() {
  return (
    <>
    {/* <div> */}





     {/* <div className={styles.intros}>
    <h2>Hello,I'm</h2>
    <h1>Pallavi gupta</h1>
    </div> */}
 
   
    <div>
    
    
        <nav>
          <ul className={styles.uls} >

          {/* <label> image portfolio
          <img src={images} alt="" className={styles.imge}/>

    </label> */}

    <label>
    <div className={styles.dis}>

    

    <img src={images} alt="" className={styles.imge}/>
    <h1 className={styles.intros}> Hello, I'm </h1>
    <h2 >PALLAVI GUPTA</h2>
  
    {/* <div>

    <img src={image1} alt="" className={styles.both}/> 
    </div> */}

   

    <h3 className={styles.lorem}>Lorem ipsum dolor sit amel
     consectetur,
      adipisicing elit. Ullam id fuga impedit ipsa, 
     alias laboriosam molestiae debitis sapiente error, 
     deleniti porro repellatsoluta autem tempore ipsum
      mollitia voluptatem quas dicta!

      {/* <img src={image1} alt="" className={styles.both}/> */}

      </h3>
      </div>

      {/* <label>
    <img src={image1} alt="" className={styles.both}/>

    </label> */}

     


    </label>



             <Link to="/"><h3 className={styles.navbar} target="_blank">Home</h3>
            
             </Link>

            <Link to="/AboutMe"  target="_blank"  ><h3>AboutMe</h3></Link>

            <Link to="/Skills" target="_blank" ><h3>Skills</h3></Link>

            <Link to="/Contact" target="_blank"><h3>Contact</h3></Link>

             <a href={pdf} target="_blank"><h3>Resume</h3></a>
{/* 
             <img src={image1} alt="" className={styles.both}/> */}



             {/* <button className="button">
  <a
     className="button"
     href='.././Pallavi_gupta_resume.pdf'
     download
     >
    Download Resume
  </a>
</button> */}

{/* <label> 
    <img src={image1} alt="" className={styles.both}/>

    </label> */}


             
           </ul>
        </nav>
    </div>
 
      
    
      
   
    
    </>
  )
}
