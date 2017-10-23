import React, { Component } from 'react';
import './BandCard.css';




export default class BandCard extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {

        const {name, id, thumb_url} = this.props.band;

        return (
            <div className="band-card">
                <div className="band-card-name"><h1>{name}</h1></div>
                
                <img src={thumb_url}/>
            </div>

        )

    }
}