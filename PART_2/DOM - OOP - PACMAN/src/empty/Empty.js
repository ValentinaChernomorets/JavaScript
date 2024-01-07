class Empty {
    constructor () {
    }
    render(rootElement) {
        this.rootElement = rootElement
        let div = $('<div>', 'empty')
        this.rootElement.appendChild(div)
    }
}
