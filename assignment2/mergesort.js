function merge(arr1, arr2) {
  const newArr = [];
  const num = arr1.length + arr2.length;

  for (let i = 0; i < num; i += 1) {
    if (arr1[0] === arr2[0]) {
      newArr.push(arr1[0]);
      arr1.shift();
    }
    if (arr1[0] > arr2[0]) {
      newArr.push(arr2[0]);
      arr2.shift();
    }
    if (arr1[0] < arr2[0]) {
      newArr.push(arr1[0]);
      arr1.shift();
    }
    if (arr1[0] === undefined) {
      arr2.forEach((item) => { newArr.push(item); });
      break;
    }
    if (arr2[0] === undefined) {
      arr1.forEach((item) => { newArr.push(item); });
      break;
    }
  }
  return newArr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  // split arr
  const middle = Math.round(arr.length / 2);
  const leftArr = arr.splice(0, middle);
  const rightArr = arr;

  // sort left arr
  const arr1 = mergeSort(leftArr);

  // sort right arr
  const arr2 = mergeSort(rightArr);

  // merge left arr and right arr
  const result = merge(arr1, arr2);

  return result;
}

const arr = [1, 2, 1, 4, 9];
console.log(mergeSort(arr));
