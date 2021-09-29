export function getRandom(range: number, start: number = 0) {
  return Math.floor(Math.random() * range + start);
}