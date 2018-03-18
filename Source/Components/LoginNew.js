import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Management from "./Management.js";
import Dashboard from "./Dashboard.js";

export default class LoginNew extends Component {

	constructor(props)
	{
		super(props);
		this.state={ 
			lblLoginDtl:false,
			lblLoginValid:true,
			getLoginNme:"",
			checkValue:"",
			checkNull:""

		};
	}

	getClickDisplayLogin(e){
		e.preventDefault();
		if(this.state.getLoginNme.length >= 0)
    	{
    		
			this.setState({
				lblLoginDtl:!this.state.lblLoginDtl,
				lblLoginValid:!this.state.lblLoginValid
			});

		}
		console.log("Show my data-", this.state.lblLoginValid);
	
	}
	getValue(e)
	{	
		this.setState({
			getLoginNme: e.target.value,				
		});		
	}
  render() {  	
  return (
	<div className="w3-row">
		<div className="w3-col s12 m8 l6 w3-bar w3-left w3-black" style={{width:"100%",overflow:"hidden",height:"50px"}}>
			<div>
				<h3 className = "w3-bar-item w3-bold" style={{fontFamily:"Times New Roman", color:"green"}}>AlgeaH</h3>
				{(this.state.lblLoginDtl)?
					<div>
						<a className="w3-bar-item w3-button w3-right" style={{fontFamily:"Times New Roman"}} title="Lodin Details">{this.state.getLoginNme}<i className="fa fa-caret-down" style={{display: "inline", paddingLeft:"10px"}}></i><i className="fa fa-caret-up" style={{display: "none"}}></i></a>			
					</div>:
					null
				}
			</div>
		</div>
		{(this.state.lblLoginValid)?
			<div className="w3-col s12 m8 l6 centered">
			    <form action="Management">		    	
			    	<h2 >Login Form</h2>		    	
			    	
			    	<div className="imgcontainer" style={{height:"70px"}}>
				    	<img src="./Source/Assets/Image/img_avatar2.jpg" alt="Avatar" className="avatar"></img>
				  	</div>
			    	<div className="container">
					    <label><b>Username</b></label>
					    <input type="text" placeholder="Enter Username" required onChange={this.getValue.bind(this)}></input>

						<label><b>Password</b></label>
						<input type="password" placeholder="Enter Password" name="psw" required></input>
						
						<Link to="/Dashboard">
							<button type="submit" onClick={this.getClickDisplayLogin.bind(this)}>Login</button>
						</Link>
						
					</div>
					
					{/*
					<div className="container" style={{backgroundColor:"#f1f1f1"}}>
						<button type="button" className="cancelbtn">Cancel</button>
			 			<span className="psw">Forgot <a href="#">password?</a></span>
					</div>
					*/}
				</form>		
			</div>:
			
			<div>
				<Dashboard />
			</div>
		}
    			
	</div>    	
  );
}
}