/* 1. Визначення оцінки */

const score = Number(prompt("Введіть кількість балів від 0 до 100:"));

const result = score >= 60 ? "Passed" : "Failed";

console.log(result);

/* 2. Вибір напою */

const drink = Number(prompt("Оберіть напій (1-4):"));

switch (drink) {
  case 1:
    console.log("Coffee");
    break;

  case 2:
    console.log("Tea");
    break;

  case 3:
    console.log("Juice");
    break;

  case 4:
    console.log("Water");
    break;

  default:
    console.log("Unknown drink");
}

/* 3. Пошук найбільшого числа */

const firstNumber = Number(prompt("Введіть перше число:"));
const secondNumber = Number(prompt("Введіть друге число:"));
const thirdNumber = Number(prompt("Введіть третє число:"));

let largestNumber;

if (firstNumber >= secondNumber && firstNumber >= thirdNumber) {
  largestNumber = firstNumber;
} else if (secondNumber >= thirdNumber) {
  largestNumber = secondNumber;
} else {
  largestNumber = thirdNumber;
}

console.log("Найбільше число:", largestNumber);

/* 4. Підрахунок суми */

let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log(sum);

/* 5. Таблиця множення */

const multiplicationNumber = Number(
  prompt("Введіть число для таблиці множення:"),
);

for (let i = 1; i <= 10; i++) {
  console.log(`${multiplicationNumber} * ${i} = ${multiplicationNumber * i}`);
}

/* 6. Робота з рядком */

const word = "CocaCola";
let letterCount = 0;

for (let i = 0; i < word.length; i++) {
  if (word[i].toLowerCase() === "a") {
    letterCount++;
  }
}

console.log(`Кількість літер "a": ${letterCount}`);

/* 7. Функція для розрахунку ціни */

function calculatePrice(price, quantity) {
  const totalPrice = price * quantity;

  console.log(totalPrice);
}

calculatePrice(250, 3);
calculatePrice(100, 5);
calculatePrice(75, 4);
