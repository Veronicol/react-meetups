import { useSelector } from "react-redux";
import MeetupItem from "../components/meetups/MeetupItem";
import classes from "../components/meetups/MeetupList.module.css";

export default function FavoritesPage() {
  const { meetupList, favoriteList } = useSelector((state) => state);

  return (
    <section>
      <h1>Favorites Page</h1>
      {favoriteList && !!favoriteList.length && (
        <ul className={classes.list}>
          {meetupList
            .filter((currentMeetup) => favoriteList.includes(currentMeetup.id))
            .map((currentItem) => (
              <MeetupItem key={currentItem.id} item={currentItem} />
            ))}
        </ul>
      )}
    </section>
  );
}
