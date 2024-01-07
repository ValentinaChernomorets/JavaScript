class GalleryItem {
    constructor(img, url, title) {
        this.img = img
        this.url = url
        this.title = title
    }
    render() {
        return `<img src=${this.img} alt="${this.title}">`
    }
}

class Gallery {
    constructor(items) {
        this.items = items
    }
    render() {
        return this.items.map(item=>item.render()).join("")
    }
}