import React, { Component } from 'react';
import {Link} from "react-router-dom";
import PatRegHeader from "./PatRegHeader.js";

export default class PatientReg extends Component {

  constructor(props)
  {
    super(props);
    this.state={ 
      isDOBNotKnown: true,
      isDOBKnown: false,
      agYears:0,
      agMonths:0,
      agDays:0,
      AgeYear:0,
      AgeMonth:0,
      AgeDays:0,
      DisplayName:"",
      firstName1:"",
      MidName:"",
      LastName:"",
      isInactive: false,
      isInactiveDate: 0,
      getEmail: "",
      errorShownEmail: false,
      getEmailValidation: false
      
    };
  }

  emailText(e)
  {
      let getEmailValue = e.target.value;
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(getEmailValue.length > 0 && getEmailValue.match(mailformat)){
          this.setState({
              getEmail: getEmailValue,
              getEmailValidation: false,
              errorShownEmail: false
          });
      } else{
          this.setState({
              getEmailValidation: true
          });
      }
    }

  numInput(e)
  {
    var inputKeyCode = e.keyCode ? e.keyCode : e.which;

    console.log("Show my data-", inputKeyCode);

    if (inputKeyCode != null) 
    {
      console.log("Show my data-", inputKeyCode);
      if(inputKeyCode == 45 || inputKeyCode == 101) e.preventDefault();
    }
  }

  LengthNumber(e)
  {

    console.log("Length-", e.target.value.length);
    this.setState({  
          agYears : e.target.value
        });
    if (e.target.value > "99")
    {
      return null;
    }
  }

  DispalyValue(e)
  {
    console.log("Length-", e.target.value.length);
    if(e.target.value.length > "0")
    {

      var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

      var DateOfBirth = new Date(e.target.value),
        DOB = DateOfBirth.getFullYear() + '-' + (DateOfBirth.getMonth() + 1) + '-' + DateOfBirth.getDate();

      console.log("current Date-", date);
      console.log("Date-", DOB);
      
      if(DOB > date)
      {
        alert("Invalid Input. 'DOB' Cannot be greater than current date.");
        e.target.value = DOB;
      }
    }    
  }

  CalculateAge(e)
  {
    console.log("Length-", e.target.value.length);
    if(e.target.value.length > "0")
    {     
        var today = new Date(),
          date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        var DateOfBirth = new Date(e.target.value),
          DOB = DateOfBirth.getFullYear() + '-' + (DateOfBirth.getMonth() + 1) + '-' + DateOfBirth.getDate();

        const DOB_array = DOB.split('-');

        console.log("Days-", DOB_array[2]);
        console.log("Months-", DOB_array[1]);
        console.log("Years-", DOB_array[0]); 

        const Current_array = date.split('-');

        console.log("Days-", Current_array[2]);
        console.log("Months-", Current_array[1]);
        console.log("Years-", Current_array[0]);

        this.setState({
          agYears : Current_array[0] - DOB_array[0],
          agMonths : Current_array[1] - DOB_array[1],
          agDays : Current_array[2] - DOB_array[2]
        });        

        console.log("Age Years-", this.state.agYears);      
    }    
  }

  CalculateDateofBirth(e)
  {
    
      var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

      const Current_array = date.split('-');

      console.log("Days-", Current_array[2]);
      console.log("Months-", Current_array[1]);
      console.log("Years-", Current_array[0] - this.state.agYears);
  }

  SetAgeYear(e)
  {
    console.log("Length-", e.target.value.length);
    if(e.target.value.length > "0")
    {        
        this.setState({
          agYears : e.target.value,          
        },()=>{

            console.log("DOB Years-", this.state.agYears);
            this.CalculateDateofBirth();  
        });

        
    }    
  }

  SetAgeMonth(e)
  {
    console.log("Length-", e.target.value.length);
    if(e.target.value.length > "0")
    {        
        this.setState({
          AgeMonth : e.target.value
        });

        console.log("DOB Months-", this.state.AgeMonth);
    }
  }

  SetAgeDays(e)
  {
    console.log("Length-", e.target.value.length);
    if(e.target.value.length > "0")
    {        
        this.setState({
          AgeDays : e.target.value
          
        });

        console.log("DOB Days-", this.state.AgeDays);
    }    
  }
  

  DateOfBirthKnown(e)
  {
    this.setState({
        isDOBNotKnown:!this.state.isDOBNotKnown,
        isDOBKnown:!this.state.isDOBKnown
      });
  }

  InactiveCheck(e)
  {
    var CurrentDate = new Date(),
        date = CurrentDate.getFullYear() + '-' + (CurrentDate.getMonth() + 1) + '-' + CurrentDate.getDate();

    this.setState({
        isInactive:!this.state.isInactive,
        
      });
  }



  SetDisplayName()
  {
    console.log("First Name app-", this.state.firstName1);
    
    this.setState({
        DisplayName: this.state.firstName1 + " " + this.state.MidName + " " + this.state.LastName
      });


    console.log("First Name app-", this.state.DisplayName);
  }

  FirstName(e)
  {
    console.log("Patient Value-", e.target.value);

    this.setState({
      firstName1 : e.target.value
    }, () => {
          console.log("First Name -", this.state.firstName1);
          //Display Name
          this.SetDisplayName();  
    }); 
  }

  render() {
    return (
      <div>
        <div className="w3-row">
          <div className="w3-col s12 m12 l12">                     
            <div className="w3-container">          
              <div className="w3-row">              
                <div className="w3-container">
                  <div className="w3-col s12 m12 l12" style={{marginRight:"auto", float:"none !important"}}>
                    <div className="" style={{outlineStyle: "solid", color: "Black"}}>
                        <p className="w3-center">Patient Registration</p>

                        <div className="w3-row w3-container">
                          <label className="">Patient Code</label>
                          <input className="Sampletext" type="line" placeholder="*** NEW ***"></input>  
                          <input className="Sampletext" disabled="true" type="text" style={{width:"60%"}} value={this.state.DisplayName}></input>  
                        </div> 
                        <div className="w3-row w3-container">                          
                          <label className="w3-col s1 m1 l1">First Name</label>
                          <input className="Sampletext" type="line" maxLength="40" placeholder="First Name" onChange={this.FirstName.bind(this)}></input>

                          <label className="">Middle Name</label>
                          <input className="Sampletext" type="line" maxLength="40" placeholder="Middle Name"></input>

                          <label className="">Last Name</label>
                          <input className="Sampletext" type="line" maxLength="40" placeholder="Last Name"></input>
                        </div>  

                        <div className="w3-row w3-container">                          
                          <label className="w3-col s1 m1 l1">Gender</label>
                          <select className="Sampletext">
                            <option value="Not Selected">Not Selected</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>                            
                          </select>

                          <label className="">DOB</label>
                          <input className="Sampletext" disabled={this.state.isDOBKnown} type="date" onBlur={this.DispalyValue.bind(this)} onChange={this.CalculateAge.bind(this)}></input>

                          <input className="Sampletext" type="checkBox" onChange={this.DateOfBirthKnown.bind(this)}></input>
                          <label className="">DOB Not Known  </label>

                          <label className="">Age</label>
                          <input className="AgeText" disabled={this.state.isDOBNotKnown} type="number" min="0" max="99" value={this.state.agYears} onKeyPress={this.numInput.bind(this)} onChange={this.SetAgeYear.bind(this)} />
                          <label className="">Years</label>
                          <input className="AgeText" disabled={this.state.isDOBNotKnown} type="number" min="0" max="12"  value={this.state.agMonths} onKeyPress={this.numInput.bind(this)}/>
                          <label className="">Months</label>
                          <input className="AgeText" disabled={this.state.isDOBNotKnown} type="number" min="0" max="364" value={this.state.agDays} onKeyPress={this.numInput.bind(this)}></input>
                          <label className="">Days</label>
                        </div>   

                        <div className="w3-row w3-container">                                                    
                          <label className="w3-col s1 m1 l1">Address1</label>
                          <input className="w3-col s11 m11 l11 Sampletext" type="text" placeholder="Address1"></input>                                                
                        </div>   

                        <div className="w3-row w3-container">                
                          <label className="w3-col s1 m1 l1">Address2</label>                                                                                        
                          <input className="w3-col s11 m11 l11 Sampletext" type="text" placeholder="Address2"></input>                          
                        </div>   

                        <div className="w3-row w3-container">                                                   
                          <label className="">Postal Code</label>
                          <input className="Sampletext" type="number" onKeyPress={this.numInput.bind(this)}></input>

                          <label className="">Mobile Number</label>
                          <input className="Sampletext" type="tel" onKeyPress={this.numInput.bind(this)}></input>

                          <label className="">Email</label>
                          <input className="Sampletext" type="email" style={{width:"30%"}} onChange={this.emailText.bind(this)}/>

                          {(this.state.errorShownEmail) ? 
                              <label className="error-warning">Email must not be empty!</label>:
                              null
                          }
                          {(this.state.getEmailValidation) ? 
                              <label className="error-warning">Email must be valid!</label>:
                              null
                          }
                        </div>   

                        <div className="w3-row w3-container">                                                   
                          <label className="w3-col s1 m1 l1">Country</label>
                          <input className="Sampletext" type="line" style={{width:"17%"}}></input>

                          <label className="">state</label>
                          <input className="Sampletext" type="line" style={{width:"17%"}}></input>

                          <label className="">City</label>
                          <input className="Sampletext" type="line" style={{width:"17%"}}></input>

                          <label className="">Nationality</label>
                          <input className="Sampletext" type="line" style={{width:"17%"}}></input>
                        </div>   
                                
                        <div className="w3-row w3-container">                          
                          <label className="w3-col s1 m1 l1">Proof Tyoe</label>
                          <select className="Sampletext">
                            <option value="Not Selected">Not Selected</option>
                            <option value="Passport">Passport</option>
                            <option value="Driving License">Driving License</option>
                            <option value="ADHAR Card">ADHAR Card</option>
                            <option value="Voter ID">Voter ID</option>
                          </select>

                          <label className="">Proof ID</label>
                          <input className="Sampletext" type="line"></input>

                          
                          
                          {(this.state.isInactive)?                            
                            <div>
                              <input className="Sampletext" type="checkBox" onChange={this.InactiveCheck.bind(this)}></input>
                              <label className="">Inactive</label>
                              <input className="Sampletext"  value={this.state.isInactiveDate} type="Date"></input>                          
                            </div>:
                            <div>
                              <input className="Sampletext" type="checkBox" onChange={this.InactiveCheck.bind(this)}></input>
                              <label className="">Inactive</label>
                            </div>
                          }
                        </div>   

                        <div className="w3-row w3-container" style={{paddingTop:"10px", paddingBottom:"10px"}}>
                          <button className="w3-button w3-black w3-hover-cyan w3-round w3-left" style={{width:"100px"}}>Save</button>
                          <Link to="/Dashboard">
                            <button className="w3-button w3-black w3-hover-cyan w3-round w3-right" style={{width:"100px"}}>Close</button>
                          </Link>
                        </div> 

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
