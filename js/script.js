"use strict";
let num = 30;
function showFirstMessage(text) {
  console.log(text);
  let num = 20;
  console.log(20);
}
showFirstMessage("Hello world!");
console.log(num);

function calc(a, b) {
  return a + b;
}
console.log(calc(4, 3));

function ret() {
  let num = 50;
  return num;
}
