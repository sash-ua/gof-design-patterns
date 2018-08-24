export function arrayGen(length, max) {
  return new Array(length).fill(0).map(() => {
    return Math.round(Math.random() * max);
  });
}
