function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1.

const myName = "Agne";
const surname = "Petrauskaite";
const birthYear = "1988";
const year = 2024;

let age = year - birthYear;

console.log(`Aš esu ${myName} ${surname}. Man yra ${age} metai.`);

// 2.

let a = rand(0, 4);
let b = rand(0, 4);
console.log(`a=${a}, b=${b}`);

if (a == 0 || b == 0) {
  console.log("Dalyba iš nulio negalima");
} else if (a >= b) {
  console.log(Math.round((a / b) * 100) / 100);
} else {
  console.log(Math.round((b / a) * 100) / 100);
}

// 3.

const one = rand(0, 25);
const two = rand(0, 25);
const three = rand(0, 25);
console.log(`one=${one}, two=${two}, three=${three}`);

if ((one >= two && one < three) || (one >= three && one < two)) {
  console.log(one);
} else if ((two > one && two <= three) || (two < one && two > three)) {
  console.log(two);
} else {
  console.log(three);
}

// 4.

const a1 = rand(0, 2);
const a2 = rand(0, 2);
const a3 = rand(0, 2);
const a4 = rand(0, 2);
console.log(a1, a2, a3, a4);
let zeros = 0;
let ones = 0;
let twos = 0;

if (a1 == 0) {
  ++zeros;
} else if (a1 == 1) {
  ++ones;
} else {
  ++twos;
}
if (a2 == 0) {
  ++zeros;
} else if (a2 == 1) {
  ++ones;
} else {
  ++twos;
}
if (a3 == 0) {
  ++zeros;
} else if (a3 == 1) {
  ++ones;
} else {
  ++twos;
}
if (a4 == 0) {
  ++zeros;
} else if (a4 == 1) {
  ++ones;
} else {
  ++twos;
}

console.log(`Nulių yra ${zeros}
Vienetų yra: ${ones}
Dvejetų yra: ${twos}`);
