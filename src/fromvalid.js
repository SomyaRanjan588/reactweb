import React from 'react'
 export default class Valid extends React.Component{
     constructor(){
         super();
         this.state={
           user:"",
           password:"",
           nameerror:"",
           passworderror:""
         }
     }
     Valid(){
         if(!this.state.user.includes('@') && this.state.password.length<5)
         this.setState({nameerror:"inavlid input",passworderror:"password length must be above 5"})
         else{
             return true
         }
     }
     submit(){
         if(this.Valid()){
         alert("form is ready to take input")
     }}
     render(){
         return(
             <div>
                 <h1>form validation </h1>
                 
                 <input type="text" name="user" onChange={(e)=>{this.setState({user:e.target.value})}}></input><br></br>
                 <p style={{color:"red",fontSize:"12px",textAlign:"left"}}>{this.state.nameerror}</p>
                 <input type="password" name="password" onChange={(e)=>{this.setState({password:e.target.value})}}></input><br></br>
                 <p style={{color:"red",fontSize:"12px",textAlign:"left"}}>{this.state.passworderror}</p>
                 <br></br>
                 <button onClick={()=> this.submit()}> Submit</button>
             </div>
         )
     }
 }