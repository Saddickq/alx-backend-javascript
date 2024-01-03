export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (const value of array) {
    newArr.push(appendString + value);
  }

  return newArr;
}
