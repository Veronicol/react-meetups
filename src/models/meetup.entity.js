import { v4 as uuidv4 } from "uuid";

export class Meetup {
  constructor({ id, title, image, address, description }) {
    this.title = title;
    this.image = image;
    this.address = address;
    this.description = description;
    if (id) {
      this.id = id;
    } else {
      this.id = uuidv4();
    }
  }
}
