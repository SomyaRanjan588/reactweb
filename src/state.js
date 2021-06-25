import React from 'react'
 export default class State extends React.Component{
     constructor()
     {
        super();
             this.State={
                 name:"Somya",
                 email:"somyasahoo68@gmail.com",
                 count:0
             }
    }
    updateState(){
        this.setState({
          name:"supriya",
          count:this.State.count+1
        })
    }
     
     render()
     {
         return(
             <div>
                 <h1>{this.State.name}</h1>
                 <h1>Count {this.State.count}</h1>
                 <h2>{this.State.email}</h2>
                 <button onClick={()=>{alert("this is done")}} >Update Here </button>
             </div>
         )
     }
 }