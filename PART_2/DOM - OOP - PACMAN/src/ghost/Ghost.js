class Ghost {
    constructor (r, c, grid) {
        this.r = r
        this.c = c
        this.grid = grid
        this.grid[r][c] = this
        // this.start()
    }

    render(rootElement) {
        this.rootElement = rootElement
        let div = $('<div>', 'ghost')
        this.rootElement.appendChild(div)
    }

    start () {
        setInterval(
            this.alive.bind(this),
            1000
        )
    }

    alive() {
        let pacman = findOnMap(gm.grid, Pacman)
        if (pacman) {
            if (pacman.r > this.r) {
                moveGhost(this, 'down')
            } else if (pacman.r < this.r) {
                moveGhost(this, 'up')
            } else if (pacman.c < this.c) {
                moveGhost(this, 'left')
            } else if (pacman.c > this.c) {
                moveGhost(this, 'right')
            }
        }
        gm.render( $('.scene') )
    }
}
