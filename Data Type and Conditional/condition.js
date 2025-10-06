const age = 20;
const age1 = 11;

const qualify = age > 18 ? "Youre good to go" : "You cant go here";
console.log(qualify);

if (age1 > 18) {
    console.log(`You're an adult`);
} else {
    console.log(`You're not supposed to be here`);
}

// store
const money = 100;

const melon = 20;
const whine = 1200;
const orange = 30;

const myOrder = melon + orange;
const buy = money >= myOrder ? "Nice" : "Not enough money";
console.log(buy);

// passing grade
let grade = 20;
let message;

if (grade >= 75) {
    message = `Youre pass the exam.`;
} else if (grade >= 50) {
    message = `Take the remedy`;
} else {
    message = `Go to hell`;
}

console.log(message);

// ternary option
// level 1 - baby steps
let num = -3;
let answer = num < 0 ? `Negative` : `Positive`;
console.log(answer);
// boss fight👻
let isMember = false;
let coupon = true;
let result = isMember ? "20% off" : coupon ? "10% off" : `no discount`;
console.log(result);

//switch statement
let a = 1 + 0;

switch (a) {
    case 0:
    case 1:
    case 2:
        alert(`Too Small`);
        break;
    case 3:
        alert(`Exactly`);
        break;
    case 4:
        alert(`too much`);
        break;
    default:
        alert(`doenst wtf is it`);
}
// switch unknown value
let arg = prompt("Enter a value?");
switch (arg) {
    case '0':
    case '1':
        alert('One or zero');
        break;

    case '2':
        alert('Two');
        break;

    case 3:
        alert('Never executes!');
        break;
    default:
        alert('An unknown value');
}

// task from js.info
let browser = `Edge`;

if (browser === `Edge`) {
    alert(`You've got the Edge`)
} else if (browser === `Chrome` || browser == `Firefox` || browser === `Safari` || browser === `Opera`) {
    alert(`Okay we supported it`)
} else {
    alert(`We hope its okay right`)
}

// task from js.info again
let aa = +prompt('a?', '');

switch (aa) {
    case 0:
        alert(0)
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert(`2,3`)
        break;
    default:
        break;
}