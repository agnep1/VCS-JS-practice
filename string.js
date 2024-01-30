// 1.
const personName = "Marijonas";
const personSurname = "Mikutavicius";

document.write(
  `<p>${personName.length >= surname.length ? personSurname : personName}</p>`
);

// 2.
const nameUpDown =
  personName.toUpperCase() + " " + personSurname.toLocaleLowerCase();
document.write(`<p>${nameUpDown}</p>`);

// 3.
const initials = personName[0].toUpperCase() + personSurname[0].toUpperCase();
document.write(`<p>${initials}</p>`);

// 4.
const threeLast = (
  personName.slice(-3) + personSurname.slice(-3)
).toUpperCase();
document.write(`<p>${threeLast}</p>`);
