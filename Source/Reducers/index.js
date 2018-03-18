"use strict";

import {combineReducers} from "redux";
import {PatDetails} from "./PatDetailsReducers";

export default combineReducers({
users: PatDetails
});