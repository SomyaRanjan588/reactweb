import React from 'react';
export default class Hooks extends React.Component{
    constructor(){
        super();
         this.state={
             value:100
         }
    
    }
render()
{
    let {value}=this.state
    return(
        <div>
            <h1>count is ..... {value} </h1>
            <button onClick={()=>{this.setState({value:this.state.value-1})}}>click here to decrement</button>
            <br></br>
            <button onClick={()=>{this.setState({value:this.state.value+1})}}>click here to icrement</button>
        </div>
    )
}

}