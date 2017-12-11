import React, { Component } from 'react';
import './BandComponent.css';
import AddBand from './AddBand.js';
import {Link} from 'react-router-dom';
import animation from './animation.js';

export default class BandComponent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            bandInfo: {
                bandName: '',
                bandID: null,
                thumbURL: ''
            },
            bandAdded: false,
            
        }

        
    }

    componentWillMount(){
        let {name, id, thumb_url} = this.props.band;
        this.setState({bandName: name, bandID: id, thumbURL: thumb_url});
        console.log(this.state.bandName);
    }
    componentWillAppear(cb) {
        console.log('willenter')
        animation.show(this.bandComp, cb)
    }

    render() {
        const {name,
                 id,
                    image_url, thumb_url} = this.props.band;

                    

        return (
            <div ref={ref => this.bandComp = ref} >
                <div className="backdrop-style">
                <div className="band-popup" name="" >
                    <div className="popup-name"><h1> {name} </h1></div>
                    <div className="image-container" >
                        <img className="band-image" src={thumb_url} name=""/>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}