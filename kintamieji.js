function rand (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// 1.

const myName = 'Agne'
const surname = 'Petrauskaite'
const birthYear = '1988'
const year = 2024

let age = year - birthYear

console.log(`Aš esu ${myName} ${surname}. Man yra ${age} metai.`)

// 2.

let a = rand(0, 4)
let b = rand(0, 4)
console.log(`a=${a}, b=${b}`)

if (a == 0 || b == 0) {
  console.log('Dalyba iš nulio negalima')
} else if (a >= b) {
  console.log(Math.round((a / b) * 100) / 100)
} else {
  console.log(Math.round((b / a) * 100) / 100)
}

// 3.

const one = rand(0, 25)
const two = rand(0, 25)
const three = rand(0, 25)
console.log(`one=${one}, two=${two}, three=${three}`)

if ((one >= two && one < three) || (one >= three && one < two)) {
  console.log(one)
} else if ((two > one && two <= three) || (two < one && two > three)) {
  console.log(two)
} else {
  console.log(three)
}

// 4.

const a1 = rand(0, 2)
const a2 = rand(0, 2)
const a3 = rand(0, 2)
const a4 = rand(0, 2)
console.log(a1, a2, a3, a4)
let zeros = 0
let ones = 0
let twos = 0

if (a1 == 0) {
  ++zeros
} else if (a1 == 1) {
  ++ones
} else {
  ++twos
}
if (a2 == 0) {
  ++zeros
} else if (a2 == 1) {
  ++ones
} else {
  ++twos
}
if (a3 == 0) {
  ++zeros
} else if (a3 == 1) {
  ++ones
} else {
  ++twos
}
if (a4 == 0) {
  ++zeros
} else if (a4 == 1) {
  ++ones
} else {
  ++twos
}

console.log(`Nulių yra ${zeros}
Vienetų yra: ${ones}
Dvejetų yra: ${twos}`)

// 5.

const hTag = rand(1, 6)
console.log(hTag)
document.write(`<h${hTag}>${hTag}</h${hTag}>`)

// 6.
let number = rand(-10, 10)

document.write(
  `<span style="color:${
    number === 0 ? 'red' : number > 0 ? 'blue' : 'green'
  }">${number}</span><br/>`
)

// 7.
let cnadleOrderSize = rand(0, 5000)
let price = 1
let discount =
  cnadleOrderSize >= 2000 ? 0.04 : cnadleOrderSize >= 1000 ? 0.03 : 0
document.write(
  `Perkama ${cnadleOrderSize} žvakės, po ${(price -= price * discount)} EUR`
)
// 8.

const one8 = rand(0, 100)
const two8 = rand(0, 100)
const three8 = rand(0, 100)

console.log(one8, two8, three8)

console.log(`Vidurkis: ${((one8 + two8 + three8) / 3).toFixed(2)}`)

let sum = 0
let quantity = 0

if (one8 > 10 && one8 < 90) {
  sum += one8
  quantity++
}
if (two8 > 10 && two8 < 90) {
  sum += two8
  quantity++
}
if (three8 > 10 && three8 < 90) {
  sum += three8
  quantity++
}

console.log(
  `Mediana: ${sum === 0 ? 'Vidurkio nėra' : (sum / quantity).toFixed(2)}`
)
