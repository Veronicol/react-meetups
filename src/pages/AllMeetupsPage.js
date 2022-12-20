import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MeetupList from "../components/meetups/MeetupList";
import { fetchInitialMeetupList } from "../redux/actions/meetup_list";

export default function AllMeetupsPage() {
  const { meetupList } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!meetupList.length) {
      dispatch(fetchInitialMeetupList());
    }
  }, []);

  return (
    <section>
      <h1>All Meetups</h1>
      {meetupList && !!meetupList.length && <MeetupList list={meetupList} />}
    </section>
  );
}
