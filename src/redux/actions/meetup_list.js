import { ADD_INITIAL_MEETUP_LIST, ADD_NEW_MEETUP } from "./actionTypes";

export const addNewMeetup = (meetupData) => ({
  type: ADD_NEW_MEETUP,
  payload: meetupData,
});

export const fetchInitialMeetupList = () => (dispatch) =>
  fetch("/data.json")
    .then((response) => response.json())
    .then((json) => dispatch({ type: ADD_INITIAL_MEETUP_LIST, payload: json }));
