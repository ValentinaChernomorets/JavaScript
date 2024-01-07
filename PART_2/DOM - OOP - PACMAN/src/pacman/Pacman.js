class Pacman {
    constructor (r, c, grid) {
        this.r = r
        this.c = c
        this.grid = grid
        this.grid[r][c] = this
        this.status = "alive"
        this.hp = 100
        this.game = false
        this.hpWidth = 48
    }
    
    collisionUpdate() {
        if (this.grid[this.r][this.c] instanceof Bomb) {
            this.status = "exploading"
            this.animateExplosion();
            this.hp -= 25
            if (this.hp <= 80) {
                this.hpWidth = (this.hpWidth - 9)
            }
        }
        if (this.grid[this.r][this.c] instanceof Coin) {
            alert("YEEE");
        }
        this.grid[this.r][this.c] = this
        if (this.hp <= 0) {
            this.game = true
            this.hp = 0
        }
    }

    animateExplosion() {
        setTimeout(() => {
            this.status = "alive";
        }, 1000);
    }

    render(rootElement) {
        this.rootElement = rootElement
        // let stats = $('<div>', 'stats')
        // let liveHp = $('<div>', 'liveHp')
        // if (this.game == true) {
            // let gameOver = $('<img>', 'gamePacOver')
            // gameOver.src = `src/pacman/images/gameOver.jpg`
            // this.rootElement.appendChild(gameOver)
        // } else {
            // live style
            let live = $('<div>', 'live')
            live.style.width = `${this.hpWidth}px`
            // pacman style
            let div = $('<div>', `pacman ${this.status}`)
            this.rootElement.appendChild(div)
            div.appendChild(live)
            // stats and liveHP
            // this.rootElement.appendChild(stats)
            // this.rootElement.appendChild(liveHp)
        // }
    }
}
