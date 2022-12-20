import { ADD_FAVORITE, REMOVE_FAVORITE } from "./actionTypes";

export const addMeetupToFavoriteList = (meetupId) => ({
  type: ADD_FAVORITE,
  payload: meetupId,
});

export const removeMeetupToFavoriteList = (meetupId) => ({
  type: REMOVE_FAVORITE,
  payload: meetupId,
});
