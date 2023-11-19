// DATABASE

// DATA STRUCTURE
// Layer 1 - user
// Layer 2 - user data
const NAME = 0
const GEN  = 1
const AGE  = 2
const people = [
//    name    gen  age
    ["John",  "m", 30],
    ["Marry", "f", 31],
    ["Jack",  "m", 22],
    ["Tania", "f", 19],
    ["Mark",  "m", 33],
]

// 1. render
const render = (personalData) => {
    let html = `
        <div>
            <h2>${personalData[NAME]}</h2>
            <p>${personalData[GEN]} (${personalData[AGE]} years)}</p>
        </div>
    `
    return html
}

const renderResult = ( resultArray ) => {
    
    let html = `<ol>`
    resultArray.forEach(result => {
        html += `<li>${result}</li>`
    });
    html += `</ol>`
    resultDiv.innerHTML = html
}

renderResult(people.map( render ));
