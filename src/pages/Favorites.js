import { useSelector } from "react-redux";
import MeetupList from "../components/meetups/MeetupList";

export default function FavoritesPage() {
  const { meetupList, favoriteList } = useSelector((state) => state);
  const favoriteMeetupList = meetupList.filter((currentMeetup) => favoriteList.includes(currentMeetup.id));

  return (
    <section>
      <h1>Favorites Page</h1>
      {!!favoriteList?.length && <MeetupList list={favoriteMeetupList} />}
    </section>
  );
}
