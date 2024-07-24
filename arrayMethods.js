// ArrayMethods

const arry = [1, 2, 3, 4, 5];
const arry2 = [1, 2, 3, 4, 5];
const arry3 = [1, 2, 3, 4, 5];

// concat

const con = arry.concat(arry2, arry3);

console.log(con);

// every

let age = [20, 30, 40, 50];

function checkAge(age) {
  return age > 10;
}

let newAge = age.every(checkAge);

console.log(newAge);

// fill

let fillAge = age.fill(10);

console.log(fillAge);

// find

const arryNegative = [1, 2, -3, 4, -5];

let newFind = arryNegative.find((negative) => negative < 0);

console.log(newFind);

// findIndex

const findIndex = arryNegative.findIndex(function (number) {
  return number < 0;
});

console.log(findIndex);

// flat

const arr = [1, 2, [3, 4, [5, 6]]];

const flatt = arr.flat(2);
console.log(flatt);

// includes

console.log(arryNegative.includes(-3));

// indexOf

console.log(arryNegative.indexOf(2));

// join

console.log(arryNegative.join("*"));

// lastIndexOf

console.log(arryNegative.lastIndexOf(2));

// pop

console.log(arryNegative.pop());

// push

const number = [1, 2, 3];

const NewArry = number.push(4, 5, 6);

console.log(number);

// Reverse

console.log(number.reverse());

// unshift

const un = number.unshift(1, 2, 30);
console.log(number);

//shift
const sh = number.shift();
console.log(number);

// slice

const sli = arryNegative.slice(0, 3);

console.log(sli);

// Some

const so=number.some((Newnumber)=>Newnumber<6)
console.log(so);

// every

const ev=number.every((Newnumber)=>Newnumber>0)
console.log(ev);

// sort

const sor=number.sort((a,b)=>a-b)
console.log(sor);

// splice

const spli=arry.splice(1,1,"new")
console.log(spli);
console.log(arry);

// toString

console.log(arry.toString());

// Filter

const filter=arry.filter((number)=>number%2===0)

console.log(filter);

// Reduce

const sum=number.reduce((a,b)=>a+b)
console.log(number);
console.log(sum);

// Map

const map=number.map((number)=>number+2)
console.log(map);
console.log(number);

// forEach

const lp=number.forEach((function(newnumber){
  console.log(newnumber); 
}))
