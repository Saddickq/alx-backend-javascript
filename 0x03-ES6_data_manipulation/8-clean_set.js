export default function cleanSet(set, startingString) {
  if (!startingString || !set) return '';
  return Array.from(set)
    .filter((item) => item.startsWith(startingString))
    .map((item) => item.replace(startingString, ''))
    .join('-');
}
