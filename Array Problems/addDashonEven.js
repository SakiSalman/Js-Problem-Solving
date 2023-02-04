const number = "025468";

const assDash = (number) => {
  let dashNum = "";
  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 == 0 && number[i + 1] % 2 == 0) {
      dashNum += number[i] + "-";
    } else {
      dashNum += number[i];
    }
  }

  console.log(dashNum);
};

assDash(number);
