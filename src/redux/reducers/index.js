import { combineReducers } from "redux";
import { meetupListReducer } from "./meetup_list";

export default combineReducers({ meetupList: meetupListReducer });
