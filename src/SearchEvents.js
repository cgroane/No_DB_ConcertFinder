import React, { Component } from 'react';
import axios from 'axios';
import './SearchEvents.css';
import EventListing from './EventListing.js';


//this component should take data from props. 
// props contains an array of objects
//each object is a band
//each band needs to be searched through the API -- url/artists/{artistname}/events
//this will get all events for that artist 
//need to include date parameter, should be a range
//how do i pass in a range
//need to get all events for this artist (the one being passed at a time) that fall within this date range
//you would filter out the array[eventObject].datetime is not in the range
//so data goes into this.state.eventsArray (concat)
//then it should be modified by another function that filters out the unwanted data

export default class SearchEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventsArray: [],
            searchClicked: false
        }
        
        this.handleClick = this.handleClick.bind(this);

    }

   
   
   
    handleClick() {
    console.log(this.props.bandsToSearch);
        for (var i = 0; i <this.props.bandsToSearch.length; i++) {
            console.log('test for Loop')
            axios.get(`http://localhost:3000/api/events/${this.props.bandsToSearch[i].name}`).then(response => 
            
            
           
            this.setState({eventsArray: this.state.eventsArray.concat(response.data), searchClicked: true}, () => console.log(this.state.eventsArray)));
        }

    }

    

    render() {

        let listEvents = null;
        if(this.state.searchClicked ) {
            
            listEvents = <EventListing events={this.state.eventsArray}/>
        }


        return (
            <div>
                <div className='event-finder-container' >
                    <button className="search-events-btn" onClick={this.handleClick}>Find Concerts</button>
                    
                </div>
                <div className="display-events" >{listEvents}</div>
            </div>
        )
    }
}