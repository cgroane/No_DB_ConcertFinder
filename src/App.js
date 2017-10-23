import React, { Component } from 'react';

import axios from 'axios';
import './App.css';
import BandComponent from './BandComponent.js'
import AddBand from './AddBand.js';
import BandCard from './BandCard.js';
import SearchEvents from './SearchEvents.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      band: {},
      searched: false,
      bandArray: [],
      
      

      eventList: [],

      searchTerms: '',
      searchedConcerts: false,
      

    }
    this.searchArtist = this.searchArtist.bind(this);
    this.handleChange = this.handleChange.bind(this );
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addToBandArray = this.addToBandArray.bind(this);
    this.handleClick = this.handleClick.bind(this);
    

  }

  

  searchArtist(params) {
   
    console.log(params);
    axios.get(`http://localhost:3000/api/bands/${params}`).then(response => 
    
    this.setState({band: response.data}));
    
  }

  handleChange(event) {
    this.setState({searchTerms: event.target.value})
    
  }

  handleSubmit(event) {
    this.setState({searched: true})
    this.searchArtist(this.state.searchTerms);
    
    event.preventDefault();
   
  }

 
  addToBandArray() {
    console.log('test');
    let arrayCopy = [...this.state.bandArray, this.state.band]
    console.log(arrayCopy)
    
    this.setState({bandArray: arrayCopy, searched: false, band: ''}, () => console.log(arrayCopy));
   
  }
  
  handleClick(event) {
    this.addToBandArray(this.state.band)
    console.log(this.state);
  }

  render() {
    
    let searchClicked = this.state.searched;
    let renderBand = null;
    
          if(searchClicked) {
            renderBand = <div >
              
                                <BandComponent band={this.state.band}/>
                                <AddBand handleClick={this.addToBandArray} band={this.state.band} />
                              

                          </div>
          }

          let showBands = null;
          if(this.state.bandArray.length) {
            showBands = 
            
                      <div className="selected-bands-grid">{this.state.bandArray.map((val, i) =>  <BandCard band={val} key={i} />)}</div>
          }
          else {
            showBands = <div>
                            <hr/>
                            <h1>Use the Search bar to find and add some bands here</h1>
                        </div>
                }

          let showEventSearchComponent = null;

          if(this.state.bandArray.length) {
            showEventSearchComponent = <SearchEvents bandsToSearch={this.state.bandArray} clicked={this.state.searchedConcerts} />
          }

    return (

      
      
      <div className="App">
        <div className="contain-search">
          <div className="fix-search">
            <form className="submit-search" onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search Here" />
              <button type="submit" value="Submit"><span>Search</span></button>
            </form>
            
          </div>
        </div>
        
        <div className="band-popup-container">{renderBand}</div>
        
        <div className="contain-bands-grid">
          
             {showBands}
          
        </div>
        {showEventSearchComponent}
      </div>
    )
  }
}

export default App;
// SearchEvents Component