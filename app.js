"use strict";
let btn = document.querySelector("button");
let h2 = document.querySelector("h2");

// FOR USER VS COMPUTER
let heading1 = document.querySelector("heading-1");
let btn2 = document.querySelector(".btn");
let userGuess = document.querySelector(".user-input");

// ==========================
// FOR RANDOM NUMBERS
// ==========================
// function getRandomNum(){
//     let randomGuess = Math.ceil(Math.random() * 10);
//     h2.innerText = randomGuess
// }
// btn.addEventListener ('click', getRandomNum)

// // function changeText (){
// //     h2.innerText = 'GbLingz'
// // }
// // btn.addEventListener ('click', changeText)

// ===================
// COLOR FLIPPER
// ===================

// let colorFLipper = ()=>{
//     let colors = ["red","blue","yellow","pink"];
//     let randomGen = Math.ceil(Math.random()* colors.length);

//     document.body.style.backgroundColor = colors[randomGen]
// }

// // btn.addEventListener('click',colorFLipper)

// setInterval(colorFLipper, 2000)

// ===============
// FOR HEX COLORS
// ===============

// let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// function getRandomNumber() {
//   let getRandom = Math.ceil(Math.random() * num.length);
//   return getRandom;
// }
// // let newGen = getRandomNumber()
// // #num[getRandomNumber]
// function changeBgr() {
//   let hash = "#";
//   for (let i = 0; i < 6; i++) {
//     hash += num[getRandomNumber()];
//   }
//   document.body.style.backgroundColor = hash;
// }

// btn.addEventListener("click", changeBgr);

// ===================================
// USER VS COMPUTER
// ===================================
// function game(e) {
//     e.preventDefault();
//     let compGuess = Math.ceil(Math.random() * 7);
//     let body = document.body.style;
//     //   console.log("hello world");
//   // console.log(compGuess);
//     if (!userGuess.value) {
//       alert("Please input a number");
//       body.backgroundColor = "red";
//     } else if (Number(userGuess.value) === compGuess) {
//       alert(`correct, you guessed ${userGuess.value} and com guessed ${compGuess}`
//       );
//       body.backgroundColor = "green";
//     }
//   }
//   btn2.addEventListener("click", game);

// USER VS COMPUTER
// ================

function game(e) {
  e.preventDefault();
  let compGuess = Math.ceil(Math.random() * 4);
  let body = document.body.style;
  //   console.log("hello world");
  // console.log(compGuess);
  if (!userGuess.value) {
    alert("Please input a number");
    body.backgroundColor = "red";
  } else if (Number(userGuess.value) === compGuess) {
    alert(
      `correct, you guessed ${userGuess.value} and com guessed ${compGuess}`
    );
    body.backgroundColor = "green";
  } else if (Number(userGuess.value) < compGuess) {
    alert("Your user guess is lower than your computer guess");
    body.backgroundColor = "yellow";
  } else if (Number(userGuess.value) > compGuess) {
    alert("Your user is greater than your Computer guess");
    body.backgroundColor = "blue";
  }
}
btn2.addEventListener("click", game);
