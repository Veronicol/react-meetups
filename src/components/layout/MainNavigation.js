import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  const { favoriteList } = useSelector((state) => state);
  
  return (
    <header className={classes.header} data-test="navigation-header">
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>

          <li>
            <Link to="/new">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>{favoriteList.length}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
