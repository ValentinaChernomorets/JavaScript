// IF EXIRCISE //
// 1. Show alert ?
// Answer: Yes. The "0" - is the string and it is not empty. It is true
if ("0") {
  alert("Hi")
}

// 2. The name of JavaScript

let title = prompt("Please tell the official name of JavaScript?", '')

if (title == 'ECMAScript') {
  alert("You right!")
} else {
  alert(`You don't know? "ECMAScript"`)
}

// 3. Rewrite 'if' in '?'
// 3.1
// let result;
// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }
let result = (a + b < 4) ? 'Few' : 'A lot';

// 3.2
// let message;
// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }
let message = (login == 'Employee') ? 'Hi' :
              (login == 'Director')  ? 'Hello' :
              (login == '')          ? 'No login' :
              '';

// SWITCH EXIRCISE //
// 1. Write "if" like "switch"
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;
  
//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;
//   default:
//     alert( 'We hope that this page looks ok!' );
// }

if (browser == 'Edge') {
  alert( "You've got the Edge!" );
} else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}

//2. Rewrite condition "if" on "switch"
// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }
// if (number === 1) {
//   alert('Вы ввели число 1');
// }
// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

const number = +prompt('Enter the number between 0 and 3', '');
switch (number) {
  case (0):
    alert('You enter the number 0');
    break;
  case (1):
    alert('You enter the number 1');
    break;
  case (2):
  case (3):
    alert('You enter the number 2, or may be 3');
    break;
}

// WHILE AND FOR //
// 1. What is the last value this code will output?
// let i = 3;
// while (i) {
//   alert( i-- );
// } 
// Answer: The last value: 1
// The circle is decrement "i" on each step. And then the output 1 and then decrement i to 0 the circle is stop.

// 2. Which value the circle "while" is output?
// let i = 0;
// while (++i < 5) alert( i );
// Answer: The first value i = 1. Because the operation ++i in the beginning is increment(++) and then comparison(<) and when alert. 
// Output: 1,2,3,4

// 3. Which value the cirle "while" is output?
// let i = 0;
// while (i++ < 5) alert( i );
// Answer: The first value i = 1. Because the operation ++i in the beginning is increment(++) and then comparison(<) and when alert.
// Output: 1,2,3,4