import React,{Component} from "react";
class StateClassCom extends Component
{
    state={
        color:"Red",
        price:143
    }
    handleChange=()=>{this.setState({color:"Yellow",price:555})}
    //priceChange=()=>{this.setState({price:"555"})}
    render()
    {
        return(
            <div>
            <h1>The color i have selected is {this.state.color} the price is {this.state.price}</h1>
            <button onClick={this.handleChange}>change the color with me</button>
            
            </div>
        )
    }
}
export default StateClassCom;