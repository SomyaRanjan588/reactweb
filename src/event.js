import React from 'react'
 export default class Handling extends React.Component{
     testfun(){
         alert("this is done")
     }
    render(){
        return(
            <div>
                <button onClick={()=>this.testfun()}>Click Me</button>
            </div>
        )
    }
}