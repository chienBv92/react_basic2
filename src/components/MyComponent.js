import React, { Component } from "react";

class MyComponent extends Component{
    state = {
        name: "",
        age: 24

    }
    handleSubmit = () =>{
        alert('click me')
    }

    render() {
        return(
            <div>
                <input value={this.state.name} onChange={(event) => this.handleOnchangeName(event)}/>
                <h3>My name is {this.state.name}</h3>
                <button onClick={()=> this.handleSubmit()}>Submit</button>
            </div>
        )
    }

    handleOnchangeName(event) {
        this.setState({
            name: event.target.value
        })
    }
}

export default MyComponent;
