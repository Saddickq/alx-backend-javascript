export default function cleanSet(set, startingString) {
  if (!startingString || !set || !(set instanceof Set) || (typeof startingString !== 'string')) {
    return '';
  }
  return Array.from(set)
    .filter((item) => item.startsWith(startingString))
    .map((item) => item.replace(startingString, ''))
    .join('-');
}
