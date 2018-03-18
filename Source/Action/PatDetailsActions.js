//PatientDetals

"use strict";

export function PatientDetals(PatDetail){
	console.log("Data-----", PatDetail)
	return{type:"POST_DATA", payload:PatDetail};
}


export function getPatientDetals(){	
	return{type:"GET_DATA"};
}

export function DeletePatientDetals(PatID){	
	return{type:"DELETE_DATA", payload:PatID};
}