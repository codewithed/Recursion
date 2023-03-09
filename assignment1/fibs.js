function fibs(num) {
  const arr = [0, 1];

  if (num === 0) {
    return [];
  }

  if (num === 1) {
    return arr[0];
  }

  for (let i = 2; i < num; i += 1) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}
console.log(fibs(10));
