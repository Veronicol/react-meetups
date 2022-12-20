import { ADD_INITIAL_MEETUP_LIST, ADD_NEW_MEETUP } from "../actions/actionTypes";

const meetupList = [];
const initialState = meetupList;

export const meetupListReducer = (state = initialState, { type, payload }) => {
  if (type === ADD_INITIAL_MEETUP_LIST) {
    state = payload;
  } else if (type === ADD_NEW_MEETUP) {
    state.push(payload);
  }
  return state;
};
