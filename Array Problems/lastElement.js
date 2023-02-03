const arra = [7, 9, 0, -2];
let index = 6;

const first = (arr, n) => {
  if (arr == null) {
    return console.log([]);
  }
  if (n < 0) {
    return console.log([]);
  }
  if (n > arr.length) {
    return console.log(arr);
  }
  console.log(arr.slice(arr.length - n, arr.length));
};

first(arra, index);
