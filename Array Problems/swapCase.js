let string = "tHE qUICK bROWN fOX";

function swapCase(params) {
  let arr = [];
  for (let i = 0; i < params.length; i++) {
    if (params[i] === params[i].toLowerCase()) {
      arr.push(params[i].toUpperCase());
    } else {
      arr.push(params[i].toLowerCase());
    }
  }
  return arr.join("");
}

console.log(swapCase(string));
