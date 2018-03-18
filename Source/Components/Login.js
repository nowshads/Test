import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Management from "./Management.js";
import Settings from "./Settings.js";
import JsonSampl from "./sample.json";
export default class Login extends Component {

	constructor(props)
	{
		super(props);
		this.state={ 			
			lblSectrgt:false,
			lblSetttrgt:false,
			smplJson:JsonSampl,			
		};
	}
	/*While Opening the Screen first this function triggers*/
	componentDidMount(){
		console.log("State Display-----", this.state.smplJson)
		/*
		var SamplDisp = [];

		SamplDisp = this.state.smplJson.map((data, index) => {
			if(data)
			{
				return (
					<div className="">
						<p> {data.Name} </p>
						<p> {data.city} </p>
					</div>
				);
			}
		});		
		console.log("State Display-----", SamplDisp)	
		*/
	}

	getClickValue(e){		
		this.setState({
			lblSectrgt:!this.state.lblSectrgt
		});

		this.setState({
			lblSetttrgt:false
		});
	}

	getClickValue1(e){		
		this.setState({
			lblSetttrgt:!this.state.lblSetttrgt
		});
		this.setState({
			lblSectrgt:false
		});
	}
  render() {
  	var SamplDisp = [];
	if(this.state.smplJson)
	{
		SamplDisp = this.state.smplJson.map((data, index) => {
			if(data)
			{
				return (
					<div key={"index"+index}>
						<p> {data.Name} </p>
						<p> {data.city} </p>
					</div>
				);
			}
		});
		console.log("All Data-----", SamplDisp)	
	}
  return (
	  <div>
	  	<p>"Hi Algaeh"</p>
	  	<Link to="/">
			<button className="w3-button w3-black w3-hover-cyan w3-round" style={{marginRight:"10px"}}>Home</button>
		</Link>
		<Link to="/FeedPage">
			<button className="w3-button w3-black w3-hover-cyan w3-round" style={{marginRight:"10px"}}>Feed Page</button>
		</Link>
		
		
		<button className="w3-button w3-black w3-hover-cyan w3-round" style={{marginRight:"10px"}} onClick={this.getClickValue1.bind(this)}>Settings</button>
		
		<button className="w3-button w3-black w3-hover-cyan w3-round" style={{marginRight:"10px"}} onClick={this.getClickValue.bind(this)}>Management</button>
		<Link to="/AboutPage">
			<button className="w3-button w3-black w3-hover-cyan w3-round" style={{marginRight:"10px"}}>About Page</button>
		</Link>
		{(this.state.lblSectrgt)?
		<div className="w3-row w3-container">					  					
			<Management />
		</div>:
		null
		}
		{(this.state.lblSetttrgt)?
		<div className="w3-row w3-container">					  					
			<Settings />
		</div>:
		null
		}	
		<div>{SamplDisp}</div>	
	  </div>
  );
}
}