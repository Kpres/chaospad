import React, { Component } from 'react';
import Button from './Button';
import "./HomePage.css";

export default class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = ({
            samples: ["Q","W","E","R","A","S","D","F","Z","X","C","V"],
        })
    }

    render() {
        return(
            <div className = "backgroundbox">
                <Button></Button>
            </div>
        );
    }
}