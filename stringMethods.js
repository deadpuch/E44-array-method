// ArrayMethods

const fruit = ["apple", "orange", "mango"];
const fruit2 = ["banana", "kiwi", "blueberry"];

// concat

const newfruit = fruit.concat(fruit2);

console.log(newfruit);

// includes

console.log(newfruit.includes("blueberry"));

// indexOf

console.log(newfruit.indexOf("kiwi"));

// lastIndexOf

console.log(newfruit.lastIndexOf("blueberry"));

// padEnd

const newFruit2 = newfruit.map(function (fruit) {
  return fruit.padEnd(10, "-");
});

console.log(newFruit2);

// console.log(newfruit);

// padStart

const frontPadding = newfruit.map(function (fruit) {
  return fruit.padStart(10, "-");
});

console.log(frontPadding);

// repeat

const rep = newfruit.join(", ");

const result = rep.repeat(2);
console.log(result);

// replace

const rpc = newfruit.map(function (fruits) {
  return fruits.replace("apple", "pie");
});

console.log(rpc);

// search
const search = newfruit.find((fruits) => fruits.search("blueberry") !== -1);

console.log(search);

// slice

const slice = newfruit.slice(0, 3);

console.log(slice);

// split

const Newname = "Hello";
const namearray = Newname.split("");
console.log(namearray);

// startsWith

const start = newfruit.filter((fruit) => fruit.startsWith("b"));

console.log(start);

// substr

const sub = newfruit.map((fruit) => fruit.substr(0, 3));

console.log(sub);

// substring

const newsub = newfruit.map((fruit) => fruit.substring(0, 3));

console.log(sub);

// toLowerCase

const string = "    HELLO WORLD    ";

console.log(string.toLowerCase());

// toUpperCase

const upper = "hello world      ";

console.log(upper.toUpperCase());

// trim

console.log(string.trim());

// trimEnd

console.log(upper.trimEnd());

// trimStart

console.log(string.trimStart());

// charAt

console.log(upper.charAt(4));

// charCodeAt

console.log(upper.charCodeAt(0));
