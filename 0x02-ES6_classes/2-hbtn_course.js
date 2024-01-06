export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
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
    const allstring = array.every((item) => typeof item === 'string');
    if (Array.isArray(array && allstring)) {
      this._students = array;
    }
  }
}
