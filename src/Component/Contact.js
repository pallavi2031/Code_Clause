import React from 'react'
import styles  from "./style.module.css";
import { Component } from "react";


class Contact extends Component{
  state={
         firstname:"",
         lastname:"",
         check:"false",
         selects:"false",
         emails:"",
         numbers:""
      
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
     console.log({
         fname:this.state.firstname,
         lname:this.state.lastname,
         checkss:this.state.check,
         select:this.state.selects,
         emali:this.state.emails,
         number:this.state.numbers,
     })
     this.setState({
      firstname:"",
      lastname:"",
     
    
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
 

 render(){
     return(
         
         <div className={styles.form}>
        
       <form onSubmit={this.submitform} >
       <label>Firstname :</label>
         <input type="text"  placeholder="first name" value={this.state.firstname} onChange={this.eventchange} className={styles.first}/>
        <br />
        <br />
        <br/>
        <label>Lastname :</label>
         <input type="text"  placeholder="last name" value={this.state.lastname} onChange={this.eventhandle} className={styles.first}/>
        <br/>
        <br/>
        <br/>
        <label>Email- id :</label>
        <input type="email"  placeholder="email id" value={this.state.emails} onChange={this.eventemail} className={styles.first}/>
        <br />
        <br/>
        <br/>
        <label>Number :</label>
        <input type="number"  placeholder="+91" value={this.state.numbers} onChange={this.eventnumber} className={styles.first}/>
        {/* <select  value={this.state.selects} onChange={this.handleselect}>
         <option>select option</option>
         <option>b.tech</option>
         <option>m.tech</option>
         <option>Ece</option>
         
         </select>
         */}
        <br/>
        <br />
      <input type="checkbox" value={this.state.check} onClick={this.handlecheck}/><span className={styles.terms}> Accept terms & condition</span>
      <br/>
        <br />
        <button type="submit"  className={styles.btn}>submit</button>
        </form>

         </div>
     )
 }

}
export default Contact;
