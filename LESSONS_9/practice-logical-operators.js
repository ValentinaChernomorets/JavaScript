// 1. What's the result of OR(||) ?

alert (null || 2 || undefine);

// Answer: 
// The result is "2". 
// Why? 
// Because the first value is "null" treated as "false". 
// And "2" is truth. And the code is stop. Because the code has found the "truth" values.

// 2. What's the result of OR(||) alerts ?

alert( alert(1) || 2 || alert(3) );

// Answer: 
// The result is "2"
// Why?
// The first alert(1) is shows the first message with "1".
// But the alert() - returns result "undefined". The "undefined" turns into "false".
// Then OR operator goes on the second operand "2" - is "true".
// And the execution is stop.

// 3. What is the result of AND?

alert( 1 && null && 2 );

// Answer:
// The result is "null", because it is the first falsy value. 
// Why?
// when we execute the operation "1" && "null", the first operand "1" is "true" but the second operand "null" is "false". 
// Therefore, the result of this part of the expression will be "false", that is, null.

// 4. What is the result of AND'ed alerts?

alert( alert(1) && alert(2) );

// Answer:
// In the beging execute alert(1) which causes a popup with the text "1".
// But, the alert() statement returns "undefined". In boolean intepritator is "false". The second alert(2) is not execute.
// Then external alert() ---> alert(undefined) will cause a popup with the text "undefined".

// 5. The result of OR AND OR

alert( null || 2 && 3 || 4 );

// Answer:
// The precedence of AND(&&) is higher than OR(||), so it executes first.
// The result of 2 && 3 is 3.
// And the expression become: null || 3 || 4.
// And now the result is the first truthy value: 3.

// 6. Rewrite 'if' into '?'
// Rewrite 'if' into '?'
// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }
// Result:

let result = (a + b < 4) ? 'Below' : 'Over';

// 7. Rewrite 'if..else' into '?'
// Rewrite if..else using multiple ternary operators '?'.
// let message;

// if (login == 'Employee') {
//     message = 'Hello';
//   } else if (login == 'Director') {
//     message = 'Greetings';
//   } else if (login == '') {
//     message = 'No login';
//   } else {
//     message = '';
//   }

let message = (login == 'Employee') ? 'Hello' : 
              (login == 'Director') ? 'Greetings' :
              (login == '')         ? 'No login' : 
              '';