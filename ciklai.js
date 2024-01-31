document.write(`<p>======= 1 užduotis ===========</p>`);

let i1 = 0;
let data = "";
while (i1 < 400) {
  data += "*";
  i1++;
}
document.write(`<div style= "word-wrap: break-word;">${data}</div>`);
let i = 0;
let data2 = "";
while (i < 400) {
  if (i % 50 === 0) {
    data2 += "<br />";
  }
  data2 += "*";
  i++;
}
document.write(data2);

document.write(`<p>======= 2 užduotis ===========</p>`);
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const limit = 150;
let moreThanLimit = 0;

for (let i = 0; i < 300; i++) {
  const number = rand(0, 300);
  if (number > limit) moreThanLimit++;
  document.write(
    `<span style="${number > 275 ? "color: red" : ""}">${number} </span>`
  );
}
document.write(`<p>More than 300, where ${moreThanLimit} numbers</p>`);

document.write(`<p>======= 3 užduotis ===========</p>`);

for (let i = 1; i <= 3000; i++) {
  if (i % 77 === 0) {
    if (3000 - i <= 77) {
      document.write(i);
      break;
    }
    document.write(i + ", ");
  }
}
document.write(`<p>======= 4 užduotis ===========</p>`);

let size = 10;
for (let i = 0; i < size; i++) {
  let lineData = "";
  for (let j = 0; j < size; j++) {
    lineData += "*";
  }
  document.write(`<div style="line-height: 8px">${lineData}</div>`);
}
document.write(`<p>======= 5 užduotis ===========</p>`);

size = 10;
for (let i = 0; i < size; i++) {
  let lineData = "";
  for (let j = 0; j < size; j++) {
    j === i || j === size - 1 - i
      ? (lineData += `<span style="color: red">*</span>`)
      : (lineData += "*");
  }
  document.write(`<div style="line-height: 8px">${lineData}</div>`);
}

document.write(`<p>======= 6 užduotis ===========</p>`);

document.write(`<p>======= 7 užduotis ===========</p>`);
document.write(`<p>======= 8 užduotis ===========</p>`);
document.write(`<p>======= 9 užduotis ===========</p>`);
