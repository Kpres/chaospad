import React, { Component } from 'react';
import './Button.css'

export default class Button extends Component{
    constructor(props){
        super(props);
        this.state = ({
            x: 0,
            y: 0,
            key: "Q",
        })
    }




    render(){
        return(
            <div className = "Button">{this.state.key}</div>
        );
    }
}