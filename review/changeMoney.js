function calculateChange(payment, cost) {
  let changeMoney = payment - cost;
  let unit = [50000, 10000, 5000, 1000];

  for (let i = 0; i < unit.length; i++) {
    count = Math.floor(changeMoney / unit[i]);
    changeMoney = changeMoney - unit[i] * count;

    console.log(`${unit[i]}원 지폐: ${count}장`);
  }
}

calculateChange(100000, 33000);
console.log("");

calculateChange(500000, 378000);
