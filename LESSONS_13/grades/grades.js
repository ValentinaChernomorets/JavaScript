let grades = [0, 0, 0]
// HW1: 
// write the code what will allow user to input the three grades from using prompt()
// HW2*: check if each grade is in range 1...10
// IF all good -> insert in array 
// ELSE --> print an error message
for (let i = 0; i <= 2; i++) {
    let userInput = prompt("Please enter the grade:", '');
    userInput = parseFloat(userInput);
    if (userInput !== null && !isNaN(userInput) && isNumberInRange(userInput, 1, 10)) {
        grades[i] = userInput;
    } else {
        alert("The number is not in range 1-10 or it is not a number. Please enter the corect number!");
    }
}
function isNumberInRange(number, min, max) {
    return (number >= min && number <= max);
}
console.log(grades)
let avg_grade = (grades[0] + grades[1] + grades[2]) / 3
console.log(`average grade = ${avg_grade.toFixed(2)}`)