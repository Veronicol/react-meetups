import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MeetupItem from "../components/meetups/MeetupItem";
import classes from "../components/meetups/MeetupList.module.css";
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
      {meetupList && !!meetupList.length && (
        <ul className={classes.list}>
          {meetupList.map((currentItem) => (
            <MeetupItem key={currentItem.id} item={currentItem} />
          ))}
        </ul>
      )}
    </section>
  );
}
