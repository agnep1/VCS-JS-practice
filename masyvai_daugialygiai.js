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

//d
for (let p = 0; p < ar1.length; p++) {
  for (let a = ar1[p].length; a < 7; a++) {
    ar1[p].push(rand(5, 25))
  }
}

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
//   .sort((a, b) => a.length - b.length)
//   .sort(a => (a.includes(letter) ? -1 : 1))
// ar3.sort((a, b) => (a.includes('K') ? -1 : 1))

console.log(ar3)
