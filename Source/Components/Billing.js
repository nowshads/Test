import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Billing extends Component {
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
                        <p className="w3-center">Billing</p>

                        <div className="w3-row w3-container">
                          <label className="">Bill Number</label>
                          <input className="Sampletext" type="line" placeholder="*** NEW ***"></input>

                          <label className="">Bill Date & Time</label>
                          <input className="Sampletext" type="Date"></input>
                          <input className="Sampletext" type="Time"></input>
                          
                        </div> 
                        <div className="w3-row w3-container">                          
                          <label className="">Patient Code</label>
                          <input className="Sampletext" type="line"></input>
                          <input className="Sampletext" type="line" disabled="true"></input>

                          <label className="">Visit Code</label>
                          <input className="Sampletext" type="line"></input>                          
                        </div>  

                        <div className="w3-row w3-container">                                                   
                          <label className="">Provider Code</label>
                          <input className="Sampletext" type="line" disabled="true"></input>
                          <input className="Sampletext" type="line" disabled="true"></input>

                          <label className="">Department</label>
                          <input className="Sampletext" type="line" disabled="true"></input>
                          <input className="Sampletext" type="line" disabled="true"></input>
                        </div>   

                        <div className="w3-row w3-container">    
                          <table>
                            <caption>Bill Details</caption>
                            <tr>
                              <th>Service Type</th>
                              <th>Service Code</th>
                              <th>Description</th>
                              <th>Bill Code</th>
                              <th>Description</th>
                              <th>Unti Cost</th>
                              <th>Discount %</th>
                              <th>Discount Amount</th>
                              <th>Extend Cost</th>
                            </tr>      

                            <tr>
                              <td contenteditable='true'>Lab</td>
                              <td contenteditable='true'>LAB001</td>
                              <td contenteditable='true'>CBC</td>
                              <td contenteditable='true'>BILLAB001</td>
                              <td contenteditable='true'>CBC</td>
                              <td contenteditable='true'>300</td>
                              <td contenteditable='true'>0</td>
                              <td contenteditable='true'>0</td>
                              <td contenteditable='true'>300</td>
                            </tr>
                            <tr>
                              <td>Radiology</td>
                              <td>RAD001</td>
                              <td>MRI</td>
                              <td>BILRAD001</td>
                              <td>MRI</td>
                              <td>300</td>
                              <td>0</td>
                              <td>0</td>
                              <td>300</td>
                            </tr>                      
                          </table>
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
