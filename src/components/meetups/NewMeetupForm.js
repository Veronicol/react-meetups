import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewMeetup } from "../../redux/actions/meetup_list";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

export default function NewMeetupForm() {
  const fieldsMap = {
    TITLE: "title",
    IMAGEURL: "image",
    ADDRESS: "address",
    DESCRIPTION: "description",
  };
  const { TITLE, IMAGEURL, ADDRESS, DESCRIPTION } = fieldsMap;

  const formDefaultValue = {
    title: "",
    image: "",
    address: "",
    description: "",
  };

  const [formData, setFormData] = useState(formDefaultValue);
  const dispatch = useDispatch();

  function submitHandler(event) {
    event.preventDefault();
    if (formData.title && formData.image && formData.address && formData.description) {
      dispatch(addNewMeetup(formData));
      setFormData(formDefaultValue);
    }
  }

  const handleInputChange = (field, event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={(event) => submitHandler(event)}>
        <div className={classes.control}>
          <label htmlFor={TITLE}>Meetup Title</label>
          <input
            type="text"
            required
            id={TITLE}
            value={formData.title}
            onChange={(event) => handleInputChange(TITLE, event)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor={IMAGEURL}>Meetup Image</label>
          <input
            type="url"
            required
            id={IMAGEURL}
            value={formData.image}
            onChange={(event) => handleInputChange(IMAGEURL, event)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor={ADDRESS}>Address</label>
          <input
            type="text"
            required
            id={ADDRESS}
            value={formData.address}
            onChange={(event) => handleInputChange(ADDRESS, event)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor={DESCRIPTION}>Description</label>
          <textarea
            id={DESCRIPTION}
            required
            rows="5"
            value={formData.description}
            onChange={(event) => handleInputChange(DESCRIPTION, event)}
          />
        </div>
        <div className={classes.actions}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
