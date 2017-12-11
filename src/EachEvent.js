import React, {Component} from 'react';
import './EachEvent.css';
import {Link} from 'react-router-dom';


export default class EachEvent extends Component {
    constructor (props) {
        super(props);

    }

   

    render() {
        let {lineup, venue, datetime, url } = this.props.event;
        datetime = datetime.substring(0,10);
        let lineupList = null;
        if(typeof(lineup)== 'string') {
            <ul>
                <li>{lineup[0]}</li>
            </ul>
        }
        else if(typeof(lineup) == 'array') {
            <ul>
            <li>{lineup[0]}</li>
            
        </ul>
        }

        return (
            
            
            <div className="event-container">
                
                <h2 className='venue-name'>{venue.name}</h2>
                <hr/>
                <h3 className="date-time" >{datetime}</h3>
                <hr/>
                <h4>
                    Artist(s): {lineup}
                </h4>
                <hr/>
                <h3 className='event-link' ><a href={url} target='_blank' >More Info</a></h3>
                
            </div>
        
        
        )
    
    }

}