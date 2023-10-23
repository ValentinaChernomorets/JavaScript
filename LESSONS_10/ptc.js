// PRODUCER - creates / offers data
// HW1
// alter the code of produce() so it returns a random integer number between 1...10
// hint: Math.random + Math.floor(), Math.round(), Math.ceil
// HW1. Question: What the difference between Math.floor(), Math.round(), Math.ceil ?
// Answer:
// - Math.floor - Round down the number. 
// - Math.round - Round to the nearest integer.
// - Math.ceil  - Round up.
function produce () {
    return Math.floor(Math.random() * 11);
}

// TRANSFORMER - receives / processes / returns
// receives - paramater
// HW3:
// alter transform(n) so it an devides by 2 and round the value to an integer
// Question: Why I decide to use Math.round? Because the method is to round to number to the nearest and it is integer. 
function transform (value) {
    let result = Math.round(value/2);
    return result;
}

// CONSUMER - receives / consumes
// HW4
// alter consume(n) so it outputs in a div with id #result
// GO TO file consumer.html
function consume (n) {
    console.log("n=" + n)
}







