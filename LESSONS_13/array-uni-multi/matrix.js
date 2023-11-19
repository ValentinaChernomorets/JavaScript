// HW2:
// using the matrix variable
// - using for inside for, try to output the data inside an HTML table
function matrix () {
    let matrix = [
        [-1, 2, 1],
        [1, -2, 1],
        [-1, -2, -1],
    ]
    let html = `<table>`
        for (let i = 0; i < matrix.length; i++) {
            html += `<tr>`
            for (let j = 0; j < matrix[i].length; j++) {
                html += `<th>${matrix[i][j]}</th>`
            }
            html += `</tr>`
        }
    html += `</table>`
    table.innerHTML = html;
}
matrix()