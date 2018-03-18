import {createStore} from "redux";

export function PatDetails (state = { users:[] } , action) {
switch(action.type) {

	case "GET_DATA":
		return Object.assign({}, { users: [...state.users]} );
		break;

	case "POST_DATA" : 
	    if (state.users.length) {
	        return Object.assign({}, { users: [...state.users, action.payload]} );
	    } else {
	        return Object.assign({}, { users: [action.payload]} );
	    }
	    break; 

	case "DELETE_DATA":
		let deleteData = [...state.users];
		const indexToDelete = deleteData.findIndex(
		function(Patid) {
			return Patid.id === action.payload;
		});
		console.log("indexToDelete in users", indexToDelete);

		return {users: [...deleteData.slice(0, indexToDelete),
		...deleteData.slice(indexToDelete + 1)]};
		break;
}

return state;   
}