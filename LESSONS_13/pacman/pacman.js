// HW1:
// suppose 3 - bomba
//         4 - heart
const PACMAN = 1
const COIN = 2
const BOMBA = 3
const HEART = 4

let mapData = [
    [1,0,0,0,0,0,0,0,0,0],
    [0,0,3,0,0,0,3,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,2,0,3,0,0,2,0,0],
    [0,0,0,3,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,4,3,0,0,0],
    [0,0,3,0,0,0,0,3,0,0],
    [0,2,0,0,0,2,0,0,0,0],
    [0,0,3,0,0,0,0,0,3,0],
]
let pr = 0 // pac row
let pc = 0 // pac cell

let coins = 0
let hp = 100
let game = false

// render() - Function rendering of the map.
function render () {
    // Clear the divs
    map.innerHTML = ``
    if (game == true) {
        gamePac.innerHTML = `<img id="gamePacOver" src="images/gameOver.jpg"></img>`
        reloadGame.innerHTML = `<button id="reloadGame" onClick="window.location.reload()">Try Again!</button>`
    } else {
        for (let row = 0; row<10; row++) {
            for (let col=0; col<10; col++) {
                if (mapData[row][col] == 0) {
                    map.innerHTML += `<div></div>`
                } else if (mapData[row][col] == COIN) {
                    map.innerHTML += `<div class="coin"></div>`
                } else if (mapData[row][col] == PACMAN) {
                    map.innerHTML += `<div class="pac"></div>`
                } else if (mapData[row][col] == BOMBA) {
                    map.innerHTML += `<div class="bomb"></div>`
                } else if (mapData[row][col] == HEART) {
                    map.innerHTML += `<div class="heart"></div>`
                }
            }
        }
    }
    stats.innerHTML = `<img id="statsCoins" src="images/coin-euro-icon.png"></img> ${coins}`
    live.innerHTML = `<img id="liveHeart" src="images/Heart-icon.png"></img> ${hp}`
}
// move() - Function for the move pacman.
function move () {
    mapData[pr][pc] = 0 // remove pacman from current position
    switch(event.code) {
        // HW2:
        // Do all movements and limits
        case "ArrowRight": pc < 9 ? pc++ : 0; break;
        case "ArrowLeft":  pc > 0 ? pc-- : 9; break;
        case "ArrowDown":  pr < 9 ? pr++ : 0; break;
        case "ArrowUp":    pr > 0 ? pr-- : 9; break;
    }
    //HW3:
    // add logic corresponding to the health points:
    // if bomb -> -20 hp
    // if hearts -> +10ph
    // if hp <= 0 -> game over
    if (mapData[pr][pc] == COIN) {
        coins += 5
    }
    if (mapData[pr][pc] == HEART) {
        hp += 10
    }
    if (mapData[pr][pc] == BOMBA) {
        hp -= 20
    }
    if (hp <= 0) {
        game = true
        hp = 0
    }

    mapData[pr][pc] = 1 // put pacman in the new position
    render ()
}

render ()
