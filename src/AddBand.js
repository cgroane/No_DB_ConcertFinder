import React, { Component } from 'react';
import './AddBand.css';



export default class AddBand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersBands: []
        }

    }


    render() {
        return (
            <div>
                <button onClick={this.props.handleClick} className="addBandButton">Add Band</button>
            </div>
        )
    }

}
