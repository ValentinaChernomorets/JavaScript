// Game settings //
const MAP_W = 500
const MAP_H = 500
const BIRD_W = 50
const BIRD_H = 50

// randomRange() - This function return the position of bird on the map.
const randomRange = function (minV, maxV) {
    return Math.floor(minV + Math.random() * (maxV - minV))
}

// Parameters //
let bird_left = randomRange(0, 400)
let bird_top = randomRange(0, 400)

let direction = "right"
let speed_x = 1
let timerID
let score = 0

// Game logic //
// initGame() - This function create the map of game.
const initGame = function () {
    map.style.width = `${MAP_W}px`
    map.style.height = `${MAP_H}px`
}

// startBird() - This function determine the position of bird, and update style. And in the end getting timerID.
const startBird = function () {
    bird.style.transition = `0s`;
    bird_left = randomRange(0, 400)
    bird_top = randomRange(0, 400)
    updateBirdStyle()
    timerID = setInterval(moveBird, 10)
}
// moveBird() - This function proveding moving the bird, dependent of conditions. And in the end updating the style.
const moveBird = function () {
    // HW3:
    // add logic to this function
    // if the bird hits the bottom
    // - stop the timer
    // - #result < "GAME OVER"
    // - #result <button onclick="??"> PLAY AGAIN </button>
    if (bird_top >= MAP_H - BIRD_W) {
        clearInterval(timerID)
        result.innerHTML = `GAME OVER`
        result.innerHTML = `<button id="btn" onclick="startBird()"> PLAY AGAIN </button>`
    }
   bird_left += speed_x
   if (bird_left >= MAP_W - BIRD_W) {
        speed_x *= -1
        direction = "left"
        bird_top += randomRange(10, 30)
        speed_x *= 1.05
   }
   if (bird_left <= 0) {
        speed_x *= -1
        direction = "right"
        bird_top += randomRange(10, 30)
        speed_x *= 1.05
   }
   updateBirdStyle()
}
// updateBirdStyle() - This function update the style of bird.
const updateBirdStyle = function () {
    bird.style
    .transform = `
        translateX(${bird_left}px) 
        translateY(${bird_top}px) 
        scaleX(${direction == "left" ? -1 : 1})
    `
}
// shoot() - This function create the functionality of act shoot.
const shoot = function () {
    let click_x = event.layerX + BIRD_W / 2
    let click_y = event.layerY + BIRD_H / 2

    let bird_center_x = bird_left + BIRD_W / 2
    let bird_center_y = bird_top + BIRD_H / 2

    if (Math.abs(click_x - 10 - bird_center_x) <= 10 && Math.abs(click_y - 10 - bird_center_y) <= 10) {
        score += 5
        result.innerHTML = `SCORE: ${score}`
        // Stop the bird for timerID //
        clearInterval(timerID)
        bird.style.transition = `1s`;
        bird.style
        .transform = `
            translateX(${bird_left}px) 
            translateY(${MAP_H}px) 
            scaleX(${direction == "left" ? -1 : 1})
            rotate(3.5turn)
        `
        setTimeout(startBird, 2000)
    }
}
startBird()