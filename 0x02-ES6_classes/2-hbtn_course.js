export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else if (students.some((item) => typeof item !== 'string')) {
      throw new TypeError('All element in Students must be an array');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // getter
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // setter
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = newName;
    }
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = newLength;
    }
  }

  set students(newstudents) {
    if (newstudents.some((item) => typeof item === 'string')) {
      throw new TypeError('All element in Students must be an array');
    } else {
      this._students = newstudents;
    }
  }
}
