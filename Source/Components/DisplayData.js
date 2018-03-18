import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getPatientDetals, DeletePatientDetals} from "./../Action/PatDetailsActions.js";


class DisplayData extends Component {  

	constructor(props)
	{
		super(props);
		this.state={
			PatientDetails : []
		};
	}

	componentDidMount(){	
		this.props.getPatientDetals();
	}

	componentWillReceiveProps(newProps){	
		newProps.users.map((data, idx) => {
			data.map((item) =>{
				if(item){
					this.state.PatientDetails.push(item);
					this.setState({
						PatientDetails: this.state.PatientDetails
					})	
				}
				
			})
		})
	}

	DeleteValues(e, Id)
	{
		console.log("Id", Id)	
	}

  render() {
  	var Display = [];
  	if(this.state.PatientDetails)
	{		
		Display = this.state.PatientDetails.map((item,idx) =>{

			return(
				<div className="w3-row w3-container" key={"index", idx}>
					<div className="w3-row w3-container">
						<label>ID: {item.ID}</label>
					</div>
					<div className="w3-row w3-container">
						<label>Name: {item.Name}</label>
					</div>
					<div className="w3-row w3-container">
						<label>Mobile No: {item.MobileNo}</label>
					</div>
					<div className="w3-row w3-container">
						<label>Email Id: {item.Email}</label>
					</div>
					<div className="w3-row w3-container">
						<label>Gender: {item.Gender}</label>
					</div>
					<span className="w3-button w3-black w3-hover-cyan w3-round w3-right" style={{width:"180px"}} onClick={this.DeleteValues.bind(this, item.ID)} >Delete</span>
				</div>
			);
		})
	}   
	return (
      <div>
		<div className="w3-row">                     
			<div className="w3-container">          
				<div className="w3-row">              
					<div className="w3-container" style={{paddingTop:"10px"}}>						
				      	<div className="w3-row w3-container" style={{outlineStyle: "solid", color: "Grey"}}>
				      		{Display}
				      	</div>
				    </div>
			    </div>
		    </div>
	      </div>
      	
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    users: state.users.users
  };
}
function mapDispatchToProps(dispatch)
{
  return bindActionCreators({getPatientDetals: getPatientDetals, DeletePatientDetals: DeletePatientDetals}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(DisplayData);
