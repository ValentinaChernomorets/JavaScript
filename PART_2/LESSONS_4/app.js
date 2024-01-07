let gallery = new Gallery([
    new GalleryItem("images/1.jpg", "/test", "Test"),
    new GalleryItem("images/2.jpg", "/test", "Test"),
    new GalleryItem("images/3.jpg", "/test", "Test"),
    new GalleryItem("images/4.jpg", "/test", "Test"),
]);

let galleryDiv = document.querySelector('.gallery')
galleryDiv.innerHTML = gallery.render()