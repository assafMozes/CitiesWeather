import React, { Component } from 'react'

import City from './City'; 

class App extends React.Component {
	constructor(props) {
		super(props)
        this.state = { cities:  ["Tel Aviv", "Haifa",'Yavne', 'Netanya','Ashdod','Ramla','Rehovot']
        }
    }


	render() {
		return (
			<div> 
                {this.state.cities.map(city=><City name={city} ></City> )} 
                
			</div> 
          
        )
	}
}




export default App;

