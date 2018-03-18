import React, { Component } from 'react';
import {Link} from "react-router-dom";
export default class Management extends Component {

  constructor(props)
  {
    super(props);
    this.state={      
      txt_value:"",
      ValueChk:0.00
    };
  }

  ValidateNumber(e)
  {
    console.log("Value-", e.target.value);
    this.state.ValueChk = e.target.value;
  }

  render() {
  return (
  	<div className="w3-row">
        <div className="w3-col s10 m10 l10">                     
          <div className="w3-container">          
            <div className="w3-row">              
              <div className="w3-container">
                <div className="w3-col s12 m8 l6" style={{marginRight:"auto", paddingTop:"180px", float:"none !important"}}>                  
                  <div className="" style={{outlineStyle: "solid", color: "Black"}}>
                  	<p className="w3-center">Management</p>
                    <div className="w3-row w3-container">                                                   
                      <label className="w3-col s3 m3 l3">Management</label>
                      <input className="w3-col s9 m9 l9" type="number" step="0.01" value={this.state.ValueChk} onChange={this.ValidateNumber.bind(this)}></input>
                    </div>
                    <Link to="/">
                      <button className="w3-button w3-black w3-hover-cyan w3-round" style={{marginRight:"10px"}}>Back</button>
                    </Link>
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