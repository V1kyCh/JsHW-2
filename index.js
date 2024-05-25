//°F = (°C × 9/5) + 32
const celsius = "15";
const fahrenheit = (celsius * 9) / 5 + 32;
console.log(fahrenheit);

const days = 29;
const hours = days * 24;
const minutes = hours * 60;
console.log("Лютий має", hours, "годин та", minutes, "хвилин");

const health = 100;
const energy = 100;
console.log(health - 10, energy - 20);

const purchase = 300;
const interest = 25;
console.log("Всього зі знижкою треба заплатити", (purchase * interest) / 100);

const a = 3.6;
console.log(Math.floor(a));

const b = "6.9";
console.log(parseFloat(b));

const c = "2";
console.log(parseInt(c));

const d = 9;
console.log(Math.sqrt(d));

const z = 10;
const v = "57";
console.log(parseInt(v));
console.log(toString(z));