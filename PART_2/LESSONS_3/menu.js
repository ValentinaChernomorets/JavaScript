// HW1: add icon to constructor
// HW2: refactor render() --> to show icon if it exists
// HW3: validate the formula for a bootstrap icon - regex
// regexp validate - <i class="bi bi- ></i> any word - calendar

class MenuItem {
    constructor (url, title, icon = null) {
        this.title = title
        if(url.match(/^[a-z#-\/:0-9]+$/) !== null) {
            this.url = url
        } else {
            console.error("ERROR: wrong url format.")
        }
        if(icon !== null && icon.match(/<i\s+class="bi bi-([^"\s]+(?:\s+[^"\s]+)*)"><\/i>/)) {
            this.icon = icon
        } else {
            console.error("ERROR: wrong icon format or the icon is empty.")
            this.icon = ''
        }
    }
    render () {
        return `
            <a class="nav-link" href="${this.url}">${this.icon ? this.icon + ' ' : ''}${this.title}</a>
        `
    }
}
// HoC - height order components
class Menu {
    constructor (items) {
        this.items = items
    }
    render () {
        return `<nav class="nav flex-column">` + this.items.map(item => item.render()).join("") + '</nav>'
    }
}
