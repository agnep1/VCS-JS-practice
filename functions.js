//----------1-----------
function h1Text (text) {
  document.write(`<h1>${text}</h1>`)
}

h1Text('Lietus')

//----------2-----------
function h1Text (text, hsize) {
  document.write(`<h${hsize}>${text}</h${hsize}>`)
}

h1Text('Lietus', 1)

//----------3-----------

let dataString = btoa(Date.now())

function returnCaps (string) {
  string = string.replaceAll(/[^A-Z]/g, '-')
  let accumulator = ''
  for (i in string) {
    if (/[A-Z]/.test(string[i])) {
      accumulator += string[i]
    } else {
      document.write(`<h1>${accumulator}</h1>`)
      accumulator = ''
    }
  }
}
returnCaps(dataString)

//----------4-----------

function dividesFrom (number) {
  let dividers = 0
  for (let i = 2; i < number; i++) {
    if (number % i === 0) dividers++
  }
  return dividers
}

document.write(
  `Skaičius dalijasi iš ${dividesFrom(6)} skaitmenų, plius savęs ir 1.`
)

//----------5-----------
function rand (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}
let arr5 = []
for (let i = 0; i < 100; i++) arr5.push(rand(33, 77))

let arrrr = arr5.sort((a, b) => dividesFrom(b) - dividesFrom(a))
document.write(`<p>${arrrr}</p>`)

//----------6-----------
let arr6 = []
for (let i = 0; i < 100; i++) {
  arr6.push(rand(333, 777))
}
let arr6Copy = arr6.filter(el => dividesFrom(el) === 0)
console.log(arr6Copy)

//----------7-----------

function generateRandomArray (recurtion) {
  const array = []
  if (recurtion === 0) {
    return 0
  }
  let arrayLenght = rand(10, 20)
  for (let i = 0; i < arrayLenght; i++) {
    if (i === arrayLenght - 1) {
      return [...array, generateRandomArray(recurtion - 1)]
    }
    array[i] = rand(0, 10)
  }
}

let result = generateRandomArray(rand(10, 30))
console.log(result)
