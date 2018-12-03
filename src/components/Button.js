import React, { Component } from 'react';
import './Button.css'

export default class Button extends Component{
    constructor(props){
        super(props);
        this.state = ({
            x: 0,
            y: 0,
        })
    }

    render(){
        return(
            <div className = "Button">{this.props.name}</div>
        );
    }
}