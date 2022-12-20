import { combineReducers } from "redux";
import { favoriteListReducer } from "./favorite_list";
import { meetupListReducer } from "./meetup_list";

export default combineReducers({ meetupList: meetupListReducer, favoriteList: favoriteListReducer });
