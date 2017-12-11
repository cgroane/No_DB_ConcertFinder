import React, { Component } from 'react';
import './BandCard.css';
import {Link} from 'react-router-dom';
import ReactTransitionGroup from 'react-addons-transition-group';
import animation from './animation.js';




export default class BandCard extends Component {
    constructor(props) {
        super(props);
        
    }
    componentWillenter(cb) {
        console.log('willenter')
        animation.show(this.bandFound, cb)
    }   

    render() {

        const {name, id, thumb_url} = this.props.band;

        return (
            <div className="band-card" ref={ref => this.bandFound = ref} >
                <div className="band-card-name"><h1>{name}</h1></div>
                
                <img src={thumb_url}/>
            </div>

        )

    }
}