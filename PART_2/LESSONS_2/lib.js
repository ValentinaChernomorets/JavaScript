// producer's code
class Figure {
    constructor (title, url) {
        // Hide the props
        // HW1: encapsulate title 
        // HW2: validate the title so:
            // - not empty
            // - not contain dangerous scripts: < / > - invalid symbols | String 
        this.title   = title
        this.url     = url
    }
    render (selector) {
        let parent = document.querySelector(selector)
        parent.innerHTML = `
            <figure>
                <img src="${this.__url}" />
                <figcaption>
                    ${this.__title}
                </figcaption>
            </figure>
        `
    }
    get url () {
        return this.__url
    }
    set url (value) {
        if (value === undefined || value === "") {
           console.error("ERROR: Figure cannot have empty url")
        } else {
            this.__url = value
        }
    }
    get title () {
        return this.__title
    }
    set title (value) {
        // If not empty
        if (value.trim().length == 0 || value === "") {
            console.error("ERROR: Figure connot have empty Title")
            this.__title = "Please enter the Title right!"
        //  If contains dangerous symbols
        } else if (value.includes("<") || value.includes(">") || value.includes("/")) {
            console.error("ERROR: Figure cannot have such symbols: < , >, / ")
            this.__title = "Attention your Title contains dangerous symbols!"
        } else {
            this.__title = value
        }
    }
}
