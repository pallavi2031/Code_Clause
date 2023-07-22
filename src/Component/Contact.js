import React from 'react'
import styles  from "./style.module.css";
import emailjs from 'emailjs-com';
import { Component } from "react";


class Contact extends Component{
  state={
         firstname:"",
         lastname:"",
        //  check:"false",
        //  selects:"false",
         emails:"",
         numbers:"",
         textarea:""
      
     }

  eventchange=(event)=>{
 this.setState({
     firstname: event.target.value,
 })
 console.log(this.state.firstname);
 }

  eventhandle=(event)=>{
     this.setState({
         lastname:event.target.value,
     })
     console.log(this.state.lastname);


 }

 submitform=(event)=>{
     event.preventDefault();
    // emailjs.sendForm()
    //  console.log({
    //      fname:this.state.firstname,
    //      lname:this.state.lastname,
    //      checkss:this.state.check,
    //      select:this.state.selects,
    //      emali:this.state.emails,
    //      number:this.state.numbers,
    //      text:this.state.textare,
    //  })
     this.setState({
      firstname:"",
      lastname:"",
      emails:"",
      numbers:"",
      textarea:""
 
     
    
    })
    



 };
 


 handlecheck=(event)=>{
    this.setState({
     check:event.target.checked,
    })

 }
 handleselect=(event)=>{
     this.setState({
         selects:event.target.value

     })


 }
 eventemail=(event)=>{
    this.setState({
        emails:event.target.value,
    })
    console.log(this.state.emails);


}
eventnumber=(event)=>{
    this.setState({
        numbers:event.target.value,
    })
    console.log(this.state.numbers);


}
eventtext=(event)=>{
    this.setState({
        textare:event.target.value

    })
}



handleSubmit=(event)=> {
    event.preventDefault();
    const data = new FormData(event.target);
   

    // console.log(data.get('guptapallavi460@gmail.com')); // Reference by form input's `name` tag

    fetch('https://formsubmit.co/00e1cd9d42fe4041150a5abdf21392e1', {
      method: 'POST',
      body: data,
     
    });
  }
 

 render(){
     return(
         
         <div className={styles.form}>
        
       <form action="https://formsubmit.co/00e1cd9d42fe4041150a5abdf21392e1" method="POST"     name='contact-form'  >
       <label>Firstname :</label>
         <input type="text" id='firstname'  placeholder="Firstname"  name="Firstname" value={this.state.firstname} onChange={this.eventchange} className={styles.first} required/>
        <br />
        <br />
        <br/>
        <label>Lastname :</label>
         <input type="text"  id='lastname' placeholder="Lastname" name='Lastname' value={this.state.lastname} onChange={this.eventhandle} className={styles.first} required/>
        <br/>
        <br/>
        <br/>
        <label>Email- id :</label>
        <input type="email" id='email' placeholder="email id" value={this.state.emails} onChange={this.eventemail} className={styles.first} required/>
        <br />
        <br/>
        <br/>
        <label>Number :</label>
        <input type="text"  id='phone' placeholder="+91" value={this.state.numbers} onChange={this.eventnumber} className={styles.first} required/>
        <br/>
        <br/>
      
      
        <textarea id="maessage" rows='8' cols='55' className={styles.texts} placeholder='HOW CAN I HELP YOU?' onChange={this.eventtext} required ></textarea>
        {/* <select  value={this.state.selects} onChange={this.handleselect}>
         <option>select option</option>
         <option>b.tech</option>
         <option>m.tech</option>
         <option>Ece</option>
         
         </select>
         */}
        <br/>
        {/* <br />
      <input type="checkbox" value={this.state.check} onClick={this.handlecheck}/><span className={styles.terms}> Accept terms & condition</span>
      <br/> */}
        <br />
        <button    type="submit"  id='btnsubmit' className={styles.btn}   onChange={this.handleSubmit}>submit</button>
        </form>
        

         </div>
     )
 }

}
export default Contact;
