import React from "react";
import ReactDOM from "react-dom";
import {render} from "react-dom";
import routes from "./routes.js";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import reducers from "./Reducers/index.js";

const Middleware = applyMiddleware(logger);
const store=createStore(reducers, Middleware);

ReactDOM.render(
	<Provider store={store}>
		{routes}
	</Provider>  , document.getElementById('container'));

{/*
import {createStore} from 'redux';

//create a reducers
const reducer = function(state = 0, action) {
	console.log('Switch', action);
	switch(action.type) {
		case "INCREMENT" :
			return state + action.payload;
		break;

		case "DECREMENT" :
			return state - action.payload;
		break;
	}
}

//create a store
const store = createStore(reducer);

store.subscribe(function () {
	console.log('value of the current state', + store.getState());
})

//step 2: create and dispatch actions

store.dispatch({type: "INCREMENT", payload: 1})
store.dispatch({type: "INCREMENT", payload: 1})
store.dispatch({type: "INCREMENT", payload: 2})
store.dispatch({type: "DECREMENT", payload: 1})
store.dispatch({type: "DECREMENT", payload: 3})*/}

/*
import {createStore} from "redux";
import JsonSampl from "./Components/sample.json";

//create a reducers
const reducer = function(state = {}, action) {
switch(action.type) {
	case "POST_BOOK" :
		return state = action.payload;
	break;
// case "DECREMENT" :
// return state - action.payload;
// break;
}
};

//create a store
const store = createStore(reducer);

store.subscribe(function () {
console.log("value of the current state", store.getState());
});

//step 2: create and dispatch actions
store.dispatch({
type: "POST_BOOK",
payload: [{
id: 1,
title: "Book name",
descrption: "Book descrption",
price: "33$"
},
{
id: 2,
title: "Patient",
descrption: "Patient Name",
price: "30$"
}]
});
*/

/*
"use strict";

import {createStore} from "redux";

//create a reducers
const reducer = function(state = [], action) {
switch(action.type) {
case "POST_BOOK" :
let books = state.concat(action.payload);
return books;
break;
// case "DECREMENT" :
// return state - action.payload;
// break;
}
};

//create a store
const store = createStore(reducer);

store.subscribe(function () {
console.log("value of the current state", store.getState());
console.log("value of the current state New", store.getState().title);
});

//step 2: create and dispatch actions

store.dispatch({
type: "POST_BOOK",
payload: [{
id: 1,
title: "Harry Potter",
descrption: "Harry Potter Book descrption",
price: "33$"
},
{
id: 2,
title: "Abdul Kalam",
descrption: "Abdul Kalam Book descrption",
price: "330$"
}]
});

//create a another dispatch for adding new book

store.dispatch({
type: "POST_BOOK",
payload: {
id: 3,
title: "Msdhoni ",
descrption: "Msdhoni Book descrption",
price: "33$"
}
});*/

/*
"use strict"

import {createStore} from 'redux';

//create a reducers
const reducer = function(state = {book: []}, action) {
switch(action.type) {
case "POST_BOOK" :
let book = state.book.concat(action.payload);
return {book};
break;
// case "DECREMENT" :
// return state - action.payload;
// break;
}
}

//create a store
const store = createStore(reducer);

store.subscribe(function () {
console.log('value of the current state', store.getState());
//console.log('value of the current state', store.getState().title);
})

//step 2: create and dispatch actions

store.dispatch({
type: "POST_BOOK",
payload: [{
id: 1,
title: "Harry Potter",
descrption: "Harry Potter Book descrption",
price: "33$"
},
{
id: 2,
title: "Abdul Kalam",
descrption: "Abdul Kalam Book descrption",
price: "330$"
}]
})

//create a another dispatch for adding new book

store.dispatch({
type: "POST_BOOK",
payload: {
id: 3,
title: "Msdhoni ",
descrption: "Msdhoni Book descrption",
price: "33$"
}
})*/


//Using Spread Operator
/*
"use strict";

import {createStore} from "redux";

//create a reducers
const reducer = function(state = {book: []}, action) {
switch(action.type) {
case "POST_BOOK" :
// let book = state.book.concat(action.payload);
// return {book};
return {book: [...state.book, ...action.payload]};
break;
// case "DECREMENT" :
// return state - action.payload;
// break;
}
};

//create a store
const store = createStore(reducer);

store.subscribe(function () {
console.log("value of the current state", store.getState());
//console.log('value of the current state', store.getState().title);
});

//step 2: create and dispatch actions

store.dispatch({
type: "POST_BOOK",
payload: [{
id: 1,
title: "Harry Potter",
descrption: "Harry Potter Book descrption",
price: "33$"
},
{
id: 2,
title: "Abdul Kalam",
descrption: "Abdul Kalam Book descrption",
price: "330$"
}]
});

//create a another dispatch for adding new book

store.dispatch({
type: "POST_BOOK",
payload: [{
id: 3,
title: "Msdhoni ",
descrption: "Msdhoni Book descrption",
price: "33$"
}]
});*/



//Delete a book in the store

/*
"use strict";

import {createStore} from "redux";

//create a reducers
const reducer = function(state = {book: []}, action) {
switch(action.type) {
case "POST_BOOK" :
	return {book: [...state.book, ...action.payload]};
break;
case "DELETE_BOOK":
const cuurentBookToDelete = [...state.book];
console.log("adhthya 1-> ", cuurentBookToDelete);

    const indexToDelete = cuurentBookToDelete.findIndex(
        function(book) {
            return book.id === action.payload.id;
        });

    console.log("indexBkValue", indexToDelete);

    console.log("array inside", [...cuurentBookToDelete.slice(0, indexToDelete),
        ...cuurentBookToDelete.slice(indexToDelete + 1)] );
    return {book: [...cuurentBookToDelete.slice(0, indexToDelete),
        ...cuurentBookToDelete.slice(indexToDelete + 1)]};
    break;

}
};

//create a store
const store = createStore(reducer);

store.subscribe(function () {
console.log("value of the current state", store.getState());
//console.log('value of the current state', store.getState().title);
});

//step 2: create and dispatch actions

store.dispatch({
type: "POST_BOOK",
payload: [{
id: 1,
title: "Harry Potter",
descrption: "Harry Potter Book descrption",
price: "33$"
},
{
id: 2,
title: "Abdul Kalam",
descrption: "Abdul Kalam Book descrption",
price: "330$"
}]
});

//create a another dispatch for adding new book

store.dispatch({
type: "POST_BOOK",
payload: [{
id: 3,
title: "Msdhoni ",
descrption: "Msdhoni Book descrption",
price: "33$"
}]
});

//delete an book

store.dispatch({
type: "DELETE_BOOK",
payload: {
id: 2
}
});*/

/*
//Update

"use strict";

import {createStore} from "redux";

//create a reducers
const reducer = function(state = {book: []}, action) {
switch(action.type) {
case "POST_BOOK" :
// let book = state.book.concat(action.payload);
// return {book};
return {book: [...state.book, ...action.payload]};
break;
// case "DECREMENT" :
// return state - action.payload;
// break;
case "UPDATE_BOOK":
const cuurentBookToUpdate = [...state.book];
console.log("adhthya 1-> ", cuurentBookToUpdate);

    const indexToDelete = cuurentBookToUpdate.findIndex(
        function(book) {
            return book.id === action.payload.id;
        });

    const newBookToUpdate = {
        id: action.payload.id,
        title: action.payload.title,
        descrption: action.payload.descrption,
        price: action.payload.price
    };

    console.log("indexBkValue", indexToDelete, newBookToUpdate);

    console.log("array inside", [...cuurentBookToUpdate.slice(0, indexToDelete),
        ...cuurentBookToUpdate.slice(indexToDelete + 1)] );
    return {book: [...cuurentBookToUpdate.slice(0, indexToDelete), newBookToUpdate, 
        ...cuurentBookToUpdate.slice(indexToDelete + 1)]};
    break;
//DELETE_BOOK

}
};

//create a store
const store = createStore(reducer);

store.subscribe(function () {
console.log("value of the current state", store.getState());
//console.log('value of the current state', store.getState().title);
});

//step 2: create and dispatch actions

store.dispatch({
type: "POST_BOOK",
payload: [{
id: 1,
title: "Harry Potter",
descrption: "Harry Potter Book descrption",
price: "33$"
},
{
id: 2,
title: "Abdul Kalam",
descrption: "Abdul Kalam Book descrption",
price: "330$"
}]
});

//create a another dispatch for adding new book

store.dispatch({
type: "POST_BOOK",
payload: [{
id: 3,
title: "Msdhoni ",
descrption: "Msdhoni Book descrption",
price: "33$"
}]
});

store.dispatch({
type: "UPDATE_BOOK",
payload: {
id: 2,
title: "Learn React js abdul kalam",
descrption: "Abdul Kalam Book descrption",
price: "330$"
}
});
//delete an book

store.dispatch({
type: "DELETE_BOOK",
payload: {
id: 1
}
});*/