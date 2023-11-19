// uni/multi dimensional Array

let grades = [
    [
        [8, 9, 10, 8, 10],
        [8, 7, 6, 9, 8]
    ],
    [
        [9, 7, 6, 9, 9],
        [9, 10, 8, 9, 9],
        [10, 9, 8, 7, 9]
    ],
]

let group_index = +prompt("Chose group index(0,1): ")
let student_index = +prompt("Chose student index: ")

for (let i=0; i<5; i++) {

    console.log(grades[group_index][student_index][i])
}

// HW1:
// using for + prompt() enter 5 marks for 1 student from keybord
for (let index=0; index<5; index++) {
    let mark = +prompt("Please enter the new mark:")
    grades[group_index][student_index][index] = mark
}