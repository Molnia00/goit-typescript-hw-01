const age: number = 50;
console.log("Вік:", age);

const username: string = 'Max';
const greeting = `Привіт, ${username}!`;
console.log(greeting);

const toggle: boolean = true;
if (toggle) {
  console.log("Перемикач увімкнено.");
}

const empty: null = null;
if (empty === null) {
  console.log("Значення empty є null.");
}

const callback = (a: number): number => { return 100 + a };
const result = callback(5);
console.log("Результат callback:", result);
