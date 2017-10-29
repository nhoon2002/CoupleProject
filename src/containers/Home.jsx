import React, { Component } from 'react';
import {Link} from 'react-router';
import WeatherWidget from '../components/WeatherWidget.jsx';


class Home extends Component {
	constructor(props) {
		super(props)

		this.state = {};

	}

	componentDidMount() {

	}

	render() {



        return (
        <div className = "maindiv Home">
			  <WeatherWidget weatherID='awcc1509266510153' ipBool='false' locationKey='347625'/>
		
		  </div>






    );
  }

};


export default Home;
