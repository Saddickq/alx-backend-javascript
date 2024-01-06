export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(number) {
    if (typeof number === 'number') {
      this._length = number;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(array) {
    if (Array.isArray(array)) {
      if (array.every((item) => typeof item === 'string')) {
        this._students = array;
      } else {
        throw new TypeError('Students nust be an array of strings');
      }
    } else {
      throw new TypeError('Students nust be an array');
    }
  }
}
