let nems = ["mine", "jinha", "arif", "kamal", "mine1"];

let newuser = "mine13";

i = 0;

do {
  if (nems[i] === newuser) {
    newuser += 1;
  }
  i++;
} while (i < nems.length);

nems.push(newuser);

console.log(nems);
