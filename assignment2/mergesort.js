function mergeSort(arr) {
}

function sort(arr1, arr2) {
  const newArr = [];
  if (arr1.length === 0) {
    newArr.push(arr2);
  }
  if (arr2.length === 0) {
    newArr.push(arr1);
  }
  if (arr1[0] < arr2[0]) {
    newArr.push(arr1[0]);
    arr1.splice(0, 1);
  }
  if (arr1[0] > arr2[0]) {
    newArr.push(arr2[0]);
    arr2.splice(0, 1);
  }
  if (arr1[0] === arr2[0]) {
    newArr.push(arr1[0]);
    arr1.splice(0, 1);
  }

  return newArr;
}

function split(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const middle = Math.round(arr.length / 2);
  const leftArr = arr.splice(0, middle);
}

const arr = [1, 2, 3, 4, 5, 9, 0, 6, 7];
const arr2 = [3];
console.log(sort(arr, arr2));
