import React, { Component } from 'react';
import Button from './Button';
import "./HomePage.css";

export default class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = ({
            samples: ["Q","W","E","R","A","S","D","F","Z","X","C","V"],
        })

        this.createChaosPad = this.createChaosPad.bind(this);
    }

    createChaosPad = () => {
        let pad = [];

        for(var i = 0; i < this.state.samples.length; i++){
            var keyPut = this.state.samples[i];
            pad.push(<span><Button name = {keyPut}></Button></span>);
        }

        return pad;
    }

    render() {
        return(
            <div className = "backgroundbox">
                {this.createChaosPad()}
            </div>
        );
    }
}