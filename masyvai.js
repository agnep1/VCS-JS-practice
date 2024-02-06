function rand (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}
document.write(`<p>Masyvai</p>`)
document.write(`<p>---------1----------</p>`)

const array1 = []
for (let i = 0; i < 30; i++) {
  const number = rand(5, 25)
  array1.push(number)
}
document.write(array1)

document.write(`<p>---------2----------</p>`)
//a
let bigger = 0
for (let i = 0; i < array1.length; i++) if (array1[i] > 10) bigger++

document.write('Bigger than 10 are ' + bigger + ' numbers')
//b
let max1 = ''
let maxIndex1 = []
for (let i = 1; i < array1.length; i++) {
  if (array1[i] > max1) {
    max1 = array1[i]
    maxIndex1 = [i]
  } else if (array1[i] === max1) {
    maxIndex1.push(i)
  }
}

document.write(`<p>Didžiausia reikšmė: ${max1}</p>`)
document.write('Jos indeksas (-ai): ', maxIndex1)

//c
let sum = 0

for (let i = 0; i < array1.length / 2; i++) {
  sum += array1[i * 2]
}
document.write(`<p>Porinių indeksų reikšmių suma ${sum}</p>`)

//d

const arrayMinus1 = []
for (let i = 0; i < array1.length; i++) {
  arrayMinus1.push(array1[i] - i)
}

document.write(`Masyvas minus index -> naujas masyvas [${arrayMinus1}]`)
//e
for (let i = 0; i < 10; i++) {
  array1.push(rand(5, 25))
}
document.write(`<p>Masyvas su papildomomis reikšmėmis ${array1}</p>`)
//f
const Lyg = []
const NeLyg = []
for (let i = 0; i < array1.length; i++) {
  i % 2 === 0 ? Lyg.push(array1[i]) : NeLyg.push(array1[i])
}
document.write(`<p>Lygianani Indeksai: ${Lyg}</p>`)
document.write(`<p>Nelygianani Indeksai: ${NeLyg}</p>`)

//g

for (let i = 0; i < array1.length / 2; i++) {
  if (array1[i * 2] > 15) array1[i] = 0
}

document.write(
  `<p>Jei porinio indekso reikšmė daugiau už 15 -> 0. Naujas masyvas [${array1}]</p>`
)

//h

for (let i = 0; i < array1.length; i++) {
  if (array1[i] > 10) {
    document.write(
      `Pirma didesnė nei 10 reikšmė ${array1[i]}, kurios indeksas ${i}`
    )
    break
  }
}

//i
for (let i = array1.length - 1; i >= 0; i--) {
  if (i % 2 === 0 && i != 0) array1.splice(i, 1)
}

document.write(`<p>Ištrinti visi elementai su poriniu indeksu [${array1}]</p>`)

//3
document.write(`<p>---------3----------</p>`)
const arrUniq1 = [rand(100, 999)]
const arrUniq2 = [rand(100, 999)]

for (let i = 1; i < 100; i++) {
  let randomVal
  do {
    randomVal = rand(100, 999)
  } while (arrUniq1.includes(randomVal))

  arrUniq1.push(randomVal)
}

for (let i = 1; i < 100; i++) {
  let randomVal
  do {
    randomVal = rand(100, 999)
  } while (arrUniq2.includes(randomVal))

  arrUniq2.push(randomVal)
}

document.write(
  `<p style="word-wrap: break-word;">Unikalus sąrašas 1: [${arrUniq1}]</p>`
)
document.write(
  `<p style="word-wrap: break-word;">Unikalus sąrašas 2: [${arrUniq2}]</p>`
)

//4
document.write(`<p>---------4----------</p>`)
const arr4 = []
for (i in arrUniq1) {
  if (!arrUniq2.includes(arrUniq1[i])) arr4.push(arrUniq1[i])
}

document.write(
  `<p style="word-wrap: break-word;">Reikšmės kurios yra pirame masyve, bet nėra antrame [${arr4}] </p>`
)

//5
document.write(`<p>---------5----------</p>`)
const arr5 = []
for (i in arrUniq1) {
  if (arrUniq1.includes(arrUniq2[i])) arr5.push(arrUniq2[i])
}

document.write(`<p>Reikšmės kurios yra abejuose masyvuose [${arr5}]</p>`)

//6
document.write(`<p>---------6----------</p>`)
const arr6 = [rand(5, 25), rand(5, 25)]
for (let i = 2; i < 10; i++) {
  arr6.push(arr6[i - 1] + arr6[i - 2])
}

document.write(`<p>i=(i-1)+(i-2) -> [${arr6}]</p>`)
//7
document.write(`<p>---------7----------</p>`)

const letters = [0, 0, 0, 0]
const abcArray = []
for (let i = 0; i < 200; i++) {
  const letterNr = rand(0, 3)
  letters[letterNr]++
  if (letterNr === 0) abcArray.push('A')
  if (letterNr === 1) abcArray.push('B')
  if (letterNr === 2) abcArray.push('C')
  if (letterNr === 3) abcArray.push('D')
}

// console.log(abcArray)
document.write(
  `Array contains ${letters[0]} A, ${letters[1]} B, ${letters[2]} C and ${letters[3]} D letters`
)

//8
document.write('<p>---------8----------</p>')

const sortedABC = abcArray.sort()
document.write(sortedABC)

//9
document.write('<p>---------9----------</p>')
const abcArray1 = []
const abcArray2 = []
const abcArray3 = []

function abcArrayGen (arrName) {
  for (let i = 0; i < 200; i++) {
    const letterNr = rand(0, 3)
    if (letterNr === 0) arrName.push('A')
    if (letterNr === 1) arrName.push('B')
    if (letterNr === 2) arrName.push('C')
    if (letterNr === 3) arrName.push('D')
  }
  return arrName
}
abcArrayGen(abcArray1)
abcArrayGen(abcArray2)
abcArrayGen(abcArray3)

let combinedArr = []
for (i in abcArray) {
  combinedArr.push(abcArray1[i] + abcArray2[i] + abcArray3[i])
}
let nonRepeating = 0
for (value of combinedArr) {
  if (!(value[0] === value[1] && value[1] === value[2])) nonRepeating++
}

document.write(
  `<p style="word-wrap: break-word;">Bendras sąrašas kombinacijų [${combinedArr}]</p>`
)
document.write(
  `<p>Sąraše yra ${nonRepeating} vienodo simbolio kombinacijos.</p>`
)

let unique = 0
const abcArrayUniq = []

for (value of combinedArr) {
  let occured = 0
  for (secondVal of combinedArr) {
    if (value === secondVal) occured++
  }
  if (occured == 1) {
    unique++
    abcArrayUniq.push(value)
  }
}

document.write(
  `<p>Viso yra ${unique} unikalios kombnacijos [${abcArrayUniq}]</p>`
)

//10
document.write('<p>---------10----------</p>')
let arr10 = [rand(0, 300)]
for (let i = 1; i < 101; i++) {
  let number
  do {
    number = rand(0, 300)
  } while (arr10.includes(number))
  arr10.push(number)
}

arr10.sort((a, b) => a - b)
console.log(arr10)

let arr10Left = []
let arr10Max = [arr10[arr10.length - 1]]
let arr10Right = []

function pyramidSort () {
  arr10Left = []
  arr10Right = []
  for (let i = arr10.length - 2; i >= 0; i--) {
    let val1 = arr10[i]
    let val2 = arr10[i - 1]
    i--

    if (rand(0, 1) === 0) {
      arr10Left.unshift(val1)
      arr10Right.push(val2)
    } else {
      arr10Left.unshift(val2)
      arr10Right.push(val1)
    }
  }
  console.log(
    `Sorted 1 time, skirtumas ${Math.abs(
      arraySum(arr10Left) - arraySum(arr10Right)
    )}`
  )
}
pyramidSort()

while (Math.abs(arraySum(arr10Left) - arraySum(arr10Right)) > 30) {
  pyramidSort()
}

console.log(`Sumos: ${arraySum(arr10Left)} ir ${arraySum(arr10Right)}`)
console.log([...arr10Left, ...arr10Max, ...arr10Right])

function arraySum (array) {
  let sum = 0
  for (i in array) {
    sum += array[i]
  }
  return sum
}
