let arra1 = [1, 2, 3];

let arra2 = [];

function cloneArray(arra) {
  for (let index = 0; index < arra.length; index++) {
    arra2.push(arra[index]);
  }
}
cloneArray(arra1);
console.log(arra2);
