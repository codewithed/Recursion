function fibsRec(num) {
  const arr = [0, 1];

  if (num === 1) {
    return (0);
  }
  if (num === 2) {
    return (1);
  } if (num > 2) {
    const res = fibsRec(num - 1) + fibsRec(num - 2);
    arr.push(res);
    return res;
  }
}

console.log(fibsRec(11));
