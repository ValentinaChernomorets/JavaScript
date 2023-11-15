let names = [
    "John Down",
    "Marry Poppins",
    "Peter Rock",
    "Jack Dowson",
    "Vasilii Svetlov",
]
// 1. Print them using a loop in console
// HW1: modify this loop
//      so it prints all name besides first and last name
for (let i=1; i<(names.length - 1); i++) {
    console.log(names[i]);
}

// HW2: modify this loop 
//      so it outputs names -> html <ol> list
const namesPrint = function () {
    let html = `<ol>`
    for (let index=0; index<5; index++) {
        html += `<li>${names[index]}</li>`
    }
    html += `</ol>`
    namesList.innerHTML = html
}

// 2. Check name in array
let nameToFind = prompt("Name to find: ")
for ( let i=0; i<5; i++) {
    if (names[i] == nameToFind) {
        console.log(`${nameToFind} found!`)
    }
 }