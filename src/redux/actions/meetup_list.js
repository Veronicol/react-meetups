import { addNewMeetupToList, getInitialMeetupList } from "../../services/meetup_list.service";
import { ADD_INITIAL_MEETUP_LIST, ADD_NEW_MEETUP } from "./actionTypes";

export const addNewMeetup = (meetupData) => {
  const newMeetup = addNewMeetupToList(meetupData);
  return {
    type: ADD_NEW_MEETUP,
    payload: newMeetup,
  };
};

export const fetchInitialMeetupList = () => async (dispatch) => {
  const initialMeetupList = await getInitialMeetupList();
  dispatch({ type: ADD_INITIAL_MEETUP_LIST, payload: initialMeetupList });
};
