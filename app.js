const button = document.querySelector(".button");
const screen = document.querySelector(".screen");
const message = document.querySelector(".message");
// console.log(button)
// console.log(screen);
let realNumber = [];

button.addEventListener("click", (e) => {

let realNumber = [];
let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let lowerLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "l",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let upperLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let = Letters = [...lowerLetters, ...upperLetters];
console.log(Letters);

let symbols1 = "!@#$%^&*()_+~|}{[]:;?><,./-=";
console.log(symbols1);
let symbols = symbols1.split("");
console.log(symbols);

for (let i = 0; i < 3; i++) {
  let j = Math.floor(Math.random() * number.length);
  console.log(j);
  realNumber.push(number[j]);
}
console.log(realNumber);

for (let i = 0; i < 2; i++) {
  let j = Math.floor(Math.random() * symbols.length);
  realNumber.push(symbols[i]);
}
console.log(realNumber);

for (let i = 0; i < 1; i++) {
  let j = Math.floor(Math.random() * lowerLetters.length);
  realNumber.push(lowerLetters[j]);
}
console.log(realNumber);

for (let i = 0; i < 1; i++) {
  let j = Math.floor(Math.random() * upperLetters.length);
  realNumber.push(upperLetters[j]);
}
console.log(realNumber);

for (let i = 0; i < 3; i++) {
  let j = Math.floor(Math.random() * Letters.length);
  realNumber.push(Letters[j]);
}
console.log(realNumber);


  function random(realNumber) {
    
      let arr=realNumber


    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      // console.log(i);
      // console.log(j);

      [arr[i], arr[j]] = [arr[j], arr[i]];
      // console.log([dizi[i], dizi[j]]);
      // console.log([dizi[j], dizi[i]]);
    }
    return arr.join("");
  }
  //  let a = [1, 2,"?"];
  // karistir(a)
  // console.log(a)

  console.log(random(realNumber));
   screen.innerHTML = random(realNumber);
   message.innerText="Bu şifre 5 saniye içinde kendini yok edecektir!"


setTimeout(() => {
  message.innerText = "";
}, 5000);



 
  setTimeout(() => {
    screen.innerText = "";
  }, 5000);


});

// `${random(realNumber)}`

  // setTimeout(() => {
  //   screen.innerText=""
  // }, 3000);

  //  screen.innerText = `${random(realNumber)}`;