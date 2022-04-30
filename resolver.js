import { nanoid } from "nanoid";

class Course {
  constructor(id, { name, email, category, price, teachers, stack }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.category = category;
    this.price = price;
    this.teachers = teachers;
    this.stack = stack;
  }
}

const courseHolder = {};

const resolver = {
  getCourse: ({ id }) => {
    return new Course(id, courseHolder[i]);
  },
  saveCourse: ({ input }) => {
    const id = nanoid();
    courseHolder[i] = input;
    return new Course(id, input);
  },
};

export default resolver;
