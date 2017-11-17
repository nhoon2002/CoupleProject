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
        <div className = "container maindiv Home">
					<div id="bubbles">
		         <div className="bubble x1"></div>
		         <div className="bubble x2"></div>
		         <div className="bubble x3"></div>
		         <div className="bubble x4"></div>
		         <div className="bubble x5"></div>
		      </div>


		       {/* <!-- ///////////////SIDEBAR////////////// --> */}
		       <div id="mySidenav" className="sidenav">
		         <ul className="sideNav_ul">
		           <li><a href="javascript:void(0)" className="closebtn">&times;</a></li>
		           <li><a href="#">Album</a></li>
		           <li><a href="#">Date</a></li>
		           <li><a href="#">Todo</a></li>
		           <li><a href="#">Notes</a></li>
		         </ul>

		       </div>

		       {/* <!-- Use any element to open the sidenav -->


		       <!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page --> */}

		       <div id="main">
		         <div className="row">

		           <div className="col-md-2 col-lg-2 col-xs-2 col-sm-2"></div>
		           <div className="col-md-8 col-lg-8 col-xs-8 col-sm-8" id="centerDiv">

		             <h1 className="centerFont">
		               <span className="h1Heart">&hearts;</span>
		               우행시
		               <span className="h1Heart">&hearts;</span>
		             </h1>
		             <h3>우리들의 행복한 시간</h3>
		             <button className="btn btn-primary" id="loginBtn" name="button">로그인 하기</button>
		           </div>
		           <div className="col-md-2 col-lg-2 col-xs-2 col-sm-2"></div>
		         </div>
		       </div>
		    </div>






    );
  }

};


export default Home;
