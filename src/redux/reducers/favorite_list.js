import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/actionTypes";

const favoriteList = [];
const initialState = favoriteList;

export const favoriteListReducer = (state = initialState, { type, payload }) => {
  if (type === ADD_FAVORITE) {
    return [...state, payload];
  }
  if (type === REMOVE_FAVORITE) {
    return state.filter((currentMeetupId) => currentMeetupId !== payload);
  }
  return state;
};
