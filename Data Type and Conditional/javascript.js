let num = 20
console.log(num);

let a = 12;
let b = 20;
let sum = a + b;
console.log(sum);

console.log((4 + 6 + 9) / 77);


let c = 10;
let d = 7 * c;

console.log(d);

// new sequence

const max = 57;
const actual = max - 13;
const percentage = actual / max;

console.log(percentage);

// embedding
const nama = "Chris";
const greeting = `Hello, ${nama}`;
console.log(greeting);

// Concatenation in context
// const button = document.querySelector("button");

// function greet() {
//     const name = prompt("What is your name?");
//     const greeting = document.querySelector("#greeting");
//     greeting.textContent = `Hello ${name}, nice to see you!`;
// }

// button.addEventListener("click", greet);

// using "+"
const greet = "Hello";
const name = "Jake";
console.log(greet + ", " + name);

// expression
const movie = "Superman";
const rate = 8.5;
const opinion = "good cb movie";
const output = `I like the newest ${movie}. 
I gave it a solid ${rate}\nbecause ${movie} was ${opinion}`;

console.log(output);

// Multilne String
const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

// length
let text = "HELLO WORLD";
let char = text.charCodeAt(0);

//get letter of name
const nama1 = "bobby";
const letter = nama1[1];
console.log(letter);


//concat() berfungsi untuk join two or more strings
const text1 = "Hello";
const text2 = "World";
const text3 = text1.concat(" ", text2);
console.log(text3);

//String slice()
const text4 = "peanut, butter, jelly";
const part0 = text4.slice(8);
const part = text4.slice(0, 6);
const part1 = text4.slice(-12, -6); // ini apa gapaham jir
console.log(part);
console.log(part1);
console.log(part0);

//UpperLower 
const text5 = "gede banget";
const upper = text5.toUpperCase();
console.log(upper);

//Trim
let text11 = "     Hello World!     ";
let text22 = text11.trimEnd();
let text23 = text11.trimStart();
console.log(text22);

//padStart()
let text6 = "5";
let padded = text6.padStart(4, "x");
console.log(padded);

//padEnd()
let text7 = "5";
let paddedEnd = text7.padEnd(4, "x");
console.log(paddedEnd);

//repeat()
const text8 = "Hello World!";
const repeat = text8.repeat(2);
console.log(repeat);

//replace()
// !!Case sensitive,
// Using replace() to change a specific substring
const sentence = "The quick brown fox jumps over the lazy dog.";
const newSentence = sentence.replace("brown", "red");
console.log(newSentence); // "The quick red fox jumps over the lazy dog."

// Using replace() with a regular expression for global replacement
const globalReplace = sentence.replace(/o/g, "0");
console.log(globalReplace); // "The quick br0wn f0x jumps 0ver the lazy d0g."

//replaceAll()
const sentence2 = "The quick brown fox jumps over the lazy cat. The quick brown fox is fast.";
const replacedAllSentence = sentence2.replaceAll("quick", "swift");
console.log(replacedAllSentence);

// Perbedaan replace() dengan regex /g dan replaceAll()
// 1. replace() dengan regex - lebih fleksibel, bisa pattern kompleks
const textExample = "hello world, hello universe";
const replaceWithRegex = textExample.replace(/hello/g, "hi");
console.log("Replace dengan regex:", replaceWithRegex); // "hi world, hi universe"

// 2. replaceAll() - lebih sederhana, hanya untuk string literal
const replaceAllMethod = textExample.replaceAll("hello", "hi");
console.log("Replace dengan replaceAll:", replaceAllMethod); // "hi world, hi universe"

// Contoh regex yang tidak bisa dilakukan dengan replaceAll()
const complexText = "Call me at 123-456-7890 or 098-765-4321";
const hideNumbers = complexText.replace(/\d/g, "X");
console.log("Hide numbers:", hideNumbers); // "Call me at XXX-XXX-XXXX or XXX-XXX-XXXX"
