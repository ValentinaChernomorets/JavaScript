// wrapper for gifts
// define the type/class
// Furst example//
class Gift {
    constructor () {
        console.log("Gift custom constructor was invoked")
        this.color = "green"
        this.type = "paper"
        this.message = "HBTY"
    }
}

// create a few Gift instances
let myGift = new Gift()

// Second example // 
class GiftNew {
    constructor (color, type, message) {
        console.log("Gift custom constructor was invoked")
        this.color = color
        this.type = type
        this.message = message
    }
}

let myGiftNew = new GiftNew("green", "paper", "HBTY")
let parrentsGift = new GiftNew("red", "crystal", "HBTY")
