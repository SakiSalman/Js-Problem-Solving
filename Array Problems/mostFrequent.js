/**
 * Write a JavaScript program to find the most frequent item of an array.
 */
var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

function frequent(arr) {
  let count = 0;

  let max = 0;
  let item = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (max < count) {
      max = count;
      item = arr[i];
    }

    count = 0;
  }

  console.log(item, max + 1 + "times");
}

frequent(arr1);
