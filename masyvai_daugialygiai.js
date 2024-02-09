function rand (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

//1
const ar1 = []
for (let p = 0; p < 10; p++) {
  ar1[p] = []
  for (let a = 0; a < 5; a++) {
    ar1[p][a] = rand(5, 25)
  }
}
console.log(ar1)
//2
//a
let didesni = 0
for (let p = 0; p < ar1.length; p++) {
  for (let a = 0; a < ar1[p].length; a++) {
    if (ar1[p][a] > 10) didesni++
  }
}
console.log(didesni)

didesni = ar1.reduce((didesniP, ar) => {
  return (
    didesniP +
    ar.reduce((didesniA, val) => {
      return val > 10 ? didesniA + 1 : didesniA
    }, 0)
  )
}, 0)

didesni = ar1.reduce(
  (didesniP, ar) =>
    didesniP +
    ar.reduce((didesniA, val) => (val > 10 ? didesniA + 1 : didesniA), 0),
  0
)

console.log(didesni)
//b
let maxNum = Math.max(...ar1.flat())
console.log(maxNum)

//c
const sumos = new Array(ar1[0].length).fill(0)

for (let p = 0; p < ar1.length; p++) {
  for (let a = 0; a < ar1[p].length; a++) {
    sumos[a] += ar1[p][a]
  }
}
console.log(sumos)

ar1.forEach(arr => {
  arr.forEach((el, index) => {
    sumos[index] += el
  })
})

console.log(sumos)

//d
for (let p = 0; p < ar1.length; p++) {
  for (let a = ar1[p].length; a < 7; a++) {
    ar1[p].push(rand(5, 25))
  }
}
//Justo
// const extendSecondLevels = arrayWithChildArrays => {
//   for (let i = 0; i < arrayWithChildArrays.length; i++) {
//     arrayWithChildArrays[i] = [
//       ...arrayWithChildArrays[i],
//       rand(5, 25),
//       rand(5, 25)
//     ]
//   }
//   return arrayWithChildArrays
// }
// console.log(extendSecondLevels(generate2dArray()))
//e
const ar2 = []
for (let p = 0; p < ar1.length; p++) {
  sum = 0
  for (let a = 0; a < ar1[p].length; a++) {
    sum += ar1[p][a]
  }
  ar2.push(sum)
}
console.log(ar2)

//3
let ar3 = []
for (let p = 0; p < 10; p++) {
  arr = new Array(rand(2, 20))
  for (let a = 0; a < arr.length; a++) {
    arr[a] = String.fromCharCode(rand(65, 90))
  }

  ar3.push(arr.sort())
}

console.log(ar3)
//4

// ar3.sort((a, b) => a.length - b.length).sort(a => (a.includes('K') ? -1 : 0))
ar3.sort((a, b) => {
  if (a.includes('K') && !b.includes('K')) return -1
  if (!a.includes('K') && b.includes('K')) return 1
  return a.length - b.length
})

// sortedArray
// .sort((a, b) => a.length - b.length)
// .sort((a, b) => (a.includes(letter) ? -1 : 1) - (b.includes(letter) ? -1 : 1))

// sortedArray
//   .sort((a, b) => a.length - b.length)
//   .sort(a => (a.includes(letter) ? -1 : 1))
// ar3.sort((a, b) => (a.includes('K') ? -1 : 1))

console.log(ar3)
//5
const ar5 = []
for (let i = 0; i < 10; i++) {
  const length = rand(0, 5)
  if (length === 0) {
    ar5.push(rand(0, 10))
  } else {
    let inArr = []
    for (let j = 0; j < length; j++) {
      inArr.push(rand(0, 10))
    }
    ar5.push(inArr)
  }
}
console.log(ar5)

//6
let ar5Sum = ar5.flat().reduce((sum, el) => (sum += el), 0)
console.log(ar5Sum)

ar5.sort(
  (a, b) =>
    (Array.isArray(a) ? a.reduce((sum, el) => (sum += el), 0) : a) -
    (typeof b !== 'number' ? b.reduce((sum, el) => (sum += el), 0) : b)
)

//Codas
// let string =
//   '33!115!109!101!105!115!105!118!32!111!105!108!97!103!116!105!97!118!97!115!32!115!117!97!382!97!114!71!'
// let aString = string.split('!')
// let bString = aString.map(el => String.fromCharCode(el)).slice(0, -1)
// let cString = bString.reverse()
// let rezult = cString.join('')
// console.log(rezult)
