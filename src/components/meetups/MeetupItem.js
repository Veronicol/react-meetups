import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMeetupToFavoriteList, removeMeetupFromFavoriteList } from "../../redux/actions/favorite_list";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

export default function MeetupItem({ item }) {
  const dispatch = useDispatch();
  const { favoriteList } = useSelector((state) => state);

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const isIncluded = favoriteList.includes(item.id);
    setIsFavorite(isIncluded);
  }, [favoriteList]);

  const toggleFavoriteStatus = (id) => {
    isFavorite ? dispatch(removeMeetupFromFavoriteList(id)) : dispatch(addMeetupToFavoriteList(id));
    setIsFavorite(!isFavorite);
  };

  return (
    <li className={classes.item} data-test="meet-up-item">
      <Card>
        <div className={classes.image}>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={classes.content}>
          <h3>{item.title}</h3>
          <address>{item.address}</address>
          <p>{item.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={() => toggleFavoriteStatus(item.id)}>
            {isFavorite ? "Remove from " : "Add to "}favorites
          </button>
        </div>
      </Card>
    </li>
  );
}
