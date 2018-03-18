import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {PatientDetals} from "./../Action/PatDetailsActions.js";
import DisplayData from "./DisplayData.js";

class CredOpr extends Component {

  
  constructor(props)
  {
    super(props);
    this.state={ 
      setMRNNumber: "",     
      setName: "",
      setMobileNo: "",
      setEmail:"",
      setGender:"",
      PatDetails:[],
      RadNotSelect: true,
      RadMale: false,
      RadFemale: false
    };
  }

  MRNNumber(e)
  {
    this.setState({
      setMRNNumber:e.target.value      
    });          
  }

  PatName(e)
  {    
    this.setState({
      setName:e.target.value      
    });          
  }

  MobileNo(e)
  {
    this.setState({
      setMobileNo:e.target.value      
    });          
  }

  EmailId(e)
  {
    this.setState({
      setEmail:e.target.value      
    });          
  }

  Gender(genderV)

  {
    console.log("~~~~~~~~~~", genderV);
    if(genderV === "Male")
    {
      this.setState({
        RadNotSelect: false,
        RadMale: true,
        RadFemale: false,
        setGender:genderV
      });
    }

    else if(genderV === "Female")
    {
      this.setState({
        RadNotSelect: false,
        RadMale: false,
        RadFemale: true,
        setGender:genderV
      });
    }

    else if(genderV === "Not Selected")
    {
      this.setState({
        RadNotSelect: true,
        RadMale: false,
        RadFemale: false,
        setGender:""
      });
    }

              
  }

  SubmitValues(e)
  {    
    
     if(this.state.setMRNNumber && this.state.setName && this.state.setMobileNo
     && this.state.setEmail && this.state.setGender) {

        this.state.PatDetails = [];
        let ObjPatData={};

        ObjPatData["ID"] = this.state.PatDetails.length,
        ObjPatData["MRN"] = this.state.setMRNNumber,
        ObjPatData["Name"] = this.state.setName,
        ObjPatData["MobileNo"] = this.state.setMobileNo,
        ObjPatData["Email"] = this.state.setEmail,
        ObjPatData["Gender"] = this.state.setGender,
      
        console.log("Patient Data", ObjPatData);
        this.state.PatDetails.push(ObjPatData);
        this.setState({
          PatDetails: this.state.PatDetails
        },() => {
          this.props.PatientDetals(this.state.PatDetails);
        });
        
        console.log("Patient Data", this.state.PatDetails);

        this.setState({
          setMRNNumber: "",
          setName: "",
          setMobileNo: "",
          setEmail: "",
          setGender: "",
          RadNotSelect: true,
          RadMale: false,
          RadFemale: false
        });
    }
  }

  render() {
    return (
      <div>
        <div className="w3-row">          
          <div className="w3-container">          
            <div className="w3-row">              
              <div className="w3-container">
                <div className="w3-col s12 m8 l6" style={{marginLeft:"auto", marginRight:"auto", paddingTop:"180px", float:"none"}}>
                  <div className="" style={{outlineStyle: "solid", color: "Black"}}>
                    <h2 className="w3-center" style={{fontFamily:"Times New Roman", color:"grey"}}>Reg. Form</h2>
                    <div className="w3-row w3-container">
                      <label className="w3-col s3 m3 l3">Code</label>
                      <input className="w3-col s9 m9 l9" type="text" value={this.state.setMRNNumber} placeholder="MRN Number" onChange={this.MRNNumber.bind(this)}></input>
                    </div> 
                    <div className="w3-row w3-container">
                      <label className="w3-col s3 m3 l3">Name</label>
                      <input className="w3-col s9 m9 l9" type="text"  value={this.state.setName} placeholder="Name" onChange={this.PatName.bind(this)}></input>
                    </div>                    
                    
                    <div className="w3-row w3-container">
                      <label className="w3-col s3 m3 l3">Mobil No.</label>
                      <input className="w3-col s9 m9 l9" type="number" value={this.state.setMobileNo} placeholder="" onChange={this.MobileNo.bind(this)}></input>
                    </div>

                    <div className="w3-row w3-container">
                      <label className="w3-col s3 m3 l3">Email Id</label>
                      <input className="w3-col s9 m9 l9" type="text" value={this.state.setEmail} placeholder="Email Id" onChange={this.EmailId.bind(this)}></input>
                    </div>

                    <div className="w3-row w3-container">
                      <label className="w3-col s3 m3 l3">Gender</label>
                      <div className="w3-row w3-container w3-col s9 m9 l9">
                        <input className="w3-radio w3-col s1 m1 l1" type="radio" checked={this.state.RadNotSelect} onChange={this.Gender.bind(this, "Not Selected")}></input>
                        <label className="w3-col s3 m3 l3">Not Selected</label>
                        <input className="w3-radio w3-col s1 m1 l1" type="radio" checked={this.state.RadMale} onChange={this.Gender.bind(this, "Male")}></input>
                        <label className="w3-col s3 m3 l3">Male</label>
                        <input className="w3-radio w3-col s1 m1 l1" type="radio" checked={this.state.RadFemale} onChange={this.Gender.bind(this, "Female")}></input>
                        <label className="w3-col s3 m3 l3 w3-middle">Female</label>
                      </div>
                    </div>
                    <div className="w3-row w3-container" style={{paddingTop:"10px", paddingBottom:"10px"}}>
                      <button className="w3-button w3-black w3-hover-cyan w3-round w3-left" style={{width:"180px"}} onClick={this.SubmitValues.bind(this)}>Submit</button>
                      <Link to="/DisplayData">
                        <button className="w3-button w3-black w3-hover-cyan w3-round w3-right"  style={{width:"180px"}}>Show Details</button>
                      </Link>
                    </div>
                  </div>                 
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
  return bindActionCreators({PatientDetals: PatientDetals}, dispatch);
}
export default connect (mapStateToProps, mapDispatchToProps)(CredOpr);