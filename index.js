/* Калькулятор чайових */

const orderSum = prompt("Сума рахунку");
const tipPresent = prompt("Відсоток чайових");

if (orderSum === null || tipPresent === null) {
  alert("Canceled.");
} else {
  const sum = Number(orderSum);
  const tip = Number(tipPresent);

  if (
    orderSum.trim() === "" ||
    tipPresent.trim() === "" ||
    isNaN(sum) ||
    isNaN(tip) ||
    sum <= 0 ||
    tip < 0 ||
    tip > 100
  ) {
    alert("Invalid input data");
  } else {
    const tipAmount = (sum * tip) / 100;
    const totalSum = sum + tipAmount;

    alert(`Загальна сума: ${sum.toFixed(2)}
Чайові: ${tip}%
Сума чайових: ${tipAmount.toFixed(2)}
До сплати: ${totalSum.toFixed(2)}`);
  }
}
