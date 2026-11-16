const name = "Andriu";
let age;
age = 21;
console.log(name, age);

const answer = confirm("Чи виповнилося вам 18?");
console.log(answer);

const number = prompt("Яке ваше улюблене число");
console.log(number);

console.log(typeof name, typeof age, typeof answer, typeof number);

/* Розрахунок вартості покупки */
const price = Number(prompt("Ціна товару:"));
const quantity = Number(prompt("Кількість товарів:"));

const initialCost = price * quantity;

let discountedCost = initialCost;
discountedCost -= discountedCost * 0.15;

console.log("Початкова вартість:", initialCost);
console.log("Вартість зі знижкою 15%:", discountedCost);

console.log("Ціна:", typeof price);
console.log("Кількість:", typeof quantity);
console.log("Початкова вартість:", typeof initialCost);

console.log("Ціна", Number.isNaN(price));
console.log("Кількість", Number.isNaN(quantity));
console.log("Початкова вартість", Number.isNaN(initialCost));

/* Обробка тексту */
const city = prompt("Назвіть місто:").trim();
const country = prompt("Назвіть країну:").trim();

const upperCity = city.toUpperCase();
const lowerCountry = country.toLowerCase();

console.log("Місто:", upperCity);
console.log("Країна:", lowerCountry);

console.log("Довжина назви місто", city.length);
console.log("Довжина назви країна", country.length);

console.log("Чи містить місто літеру a:", city.includes("a"));

console.log("Індекс першої літери a:", city.indexOf("a"));
console.log("Індекс останньої літери a:", city.lastIndexOf("a"));

console.log(`I live in ${upperCity}, ${lowerCountry}.`);

/* Робота з об'єктом Math */
const number1 = 7;
const number2 = 13;

console.log("Сума:", number1 + number2);
console.log("Різниця:", number1 - number2);
console.log("Добуток:", number1 * number2);
console.log("Частка:", number1 / number2);

const division = number1 / number2;
console.log(Math.round(division)); //Виведе: 1

console.log(Math.floor(division)); //Виведе: 0

console.log(Math.ceil(division)); //Виведе: 1

console.log("Більше число:", Math.max(number1, number2));
console.log("Менше число:", Math.min(number1, number2));
