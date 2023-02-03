const arra = [7, 9, 0, -2];
let index = -3;

const first = (arr, n) => {
  if (arr == null) {
    return console.log([]);
  }
  if (n < 0) {
    return console.log([]);
  }
  console.log(arr.slice(0, n));
};

first(arra, index);
