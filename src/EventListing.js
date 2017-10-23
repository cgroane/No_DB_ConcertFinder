import React, {Component} from 'react';
import EachEvent from './EachEvent.js';
import './EventListing.css';

export default class EventListing extends Component {
    constructor (props) {
        super(props);

    }


    render() {

        const eventList = this.props.events.map((event, i) => <EachEvent event={event} key={i}/>)

        return (
            <div className="list-container">
                {eventList}
            </div>
        )
    }

}

