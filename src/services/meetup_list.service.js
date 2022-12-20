import { Meetup } from "../models/meetup.entity";

export const getInitialMeetupList = async () => {
  const initialMeetupListResponse = await fetch("/data.json");
  const initialMeetupList = await initialMeetupListResponse.json();
  return initialMeetupList.map((currentMeetup) => new Meetup(currentMeetup));
};

export const addNewMeetupToList = (meetupData) => new Meetup(meetupData);
