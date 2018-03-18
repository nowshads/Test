import React, { Component } from 'react';
import {Link} from "react-router-dom";


export default class Dashboard extends Component {

	constructor(props)
	{
		super(props);
		this.state={ 			
			blnPatientReg:true
		};
	}


	getClickDisplayPatient(e){		
		this.setState({
			blnPatientReg:!this.state.blnPatientReg
		});
	}

  render() {
    return (
    	<div>    		
    		<div className="w3-row">    			

    			<div className="w3-col s2 m2 l2" style={{paddingTop:"50px", backgroundColor:"blue"}}>
    				<div className="w3-row">			                             
			          	<div className="w3-container">
			          		<Link to="/PatientReg">
			          			<button className="big-btn w3-btn w3-white w3-border w3-round-large w3-left" onClick={this.getClickDisplayPatient.bind(this)}>Patient Registration</button>
			          		</Link>
			          		<button className="big-btn w3-btn w3-white w3-border w3-round-large w3-left">Current Visit</button>
			          		<Link to="/Billing">
			          			<button className="big-btn w3-btn w3-white w3-border w3-round-large w3-left">Op Billing</button>			          					     
			          		</Link>
			          		<button className="big-btn w3-btn w3-white w3-border w3-round-large w3-left">EHR</button>
			          		<Link to="/">
			          			<button className="big-btn w3-btn w3-white w3-border w3-round-large w3-left">Log Out</button>
			          		</Link>
			          	</div>
			        </div>
			     </div>

		        <div className="w3-col s10 m10 l10">                     
		          <div className="w3-container">
		            <div className="w3-row">

		            	{(this.state.blnPatientReg)?
		            		<div>
				            	<span style={{cursor:"pointer", fontSize:"400%", color:"Green"}}>
							    <img src="./Source/Assets/Image/Logo.jpg" alt="Avatar" className="avatar"></img>

							    AlgeaH Welcomes
							    </span>		 
						    </div>:
						    <div>
								<PatientReg />
							</div>
					    
					    }          
		            </div>
		          </div>
		        </div>
		    </div>    	
    	</div>
    	);
	}
}