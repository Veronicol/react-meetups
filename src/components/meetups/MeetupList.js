import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

export default function MeetupList({ list }) {
  return (
    <ul className={classes.list}>
      {list.map((currentItem) => (
        <MeetupItem key={currentItem.id} item={currentItem} />
      ))}
    </ul>
  );
}
