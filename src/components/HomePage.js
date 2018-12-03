import React, { Component } from 'react';


export default class HomePage extends Component {
    constructor(props){
        super(props);
    }

    makeNoise = () => {
        //To Be Implemented
    }

    render() {
        return(
            <button className = "btn btn-outline-danger" onClick = {this.makeNoise}>Click Me</button>
        );
    }
}