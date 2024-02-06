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

const dataString = btoa(Date.now())
console.log(dataString)

document.write(`<h1>${dataString.match(/[A-Z]/g)}</h1>`)
// document.write(`<h1>${dataString.match(/[A-Z]/g)}</h1>`);
