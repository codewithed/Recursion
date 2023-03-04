function fibsRec(length) {
  if (length < 1) return 'enter a valid input';

  // base case
  if (length === 1) {
    return [0];
  }
  if (length === 2) {
    return [0, 1];
  }

  // recursive case
  return [...fibsRec(length - 1),
    fibsRec(length - 1)[length - 2] + fibsRec(length - 1)[length - 3]];
}

console.log(fibsRec(10));
