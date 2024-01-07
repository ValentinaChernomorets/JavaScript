let gm = new Gamemap()

let rplace = randomPlace(gm.grid)
new Pacman(rplace[0], rplace[1], gm.grid)

rplace = randomPlace(gm.grid)
new Ghost(rplace[0], rplace[1], gm.grid)

for (let i=0; i<10; i++) {
    rplace = randomPlace(gm.grid)
    new Coin(rplace[0], rplace[1], gm.grid)
}

for (let i=0; i<5; i++) {
    rplace = randomPlace(gm.grid)
    new Bomb(rplace[0], rplace[1], gm.grid)
}

gm.render( $('.scene') )
$('body').addEventListener('keydown', function(e) {
    let pacman = findOnMap(gm.grid, Pacman)
    if (e.key == "ArrowDown") {
        movePacman(pacman, 'down')
        gm.render( $('.scene') )
    }
    if (e.key == "ArrowUp") {
        movePacman(pacman, 'up')
        gm.render( $('.scene') )
    }
    if (e.key == "ArrowRight") {
        movePacman(pacman, 'right')
        gm.render( $('.scene') )
    }
    if (e.key == "ArrowLeft") {
        movePacman(pacman, 'left')
        gm.render( $('.scene') )
    }
})
