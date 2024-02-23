// CONST
const API_KEY = "BTrQ2yYNiAJLP5auH3GUiydb2Nv1q83Z9JbXiZdS"
const ENDPOINT_MARS_ROVER_PHOTOS = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos`

// Function setDateValue - set Date of the mars photos and then load data.
function setDateValue() {
    let inputValue = document.getElementById("date-image").value
    if (inputValue != '') {
        date = inputValue
        let url = generateMarsPhotoAPIUrl(date)
        loadMarsRoverPhotoData(url)
    } else {
        let divG = document.querySelector('#info-date')
        let div = document.createElement('div')
        div.classList.add('error')
        let h = document.createElement('h3')
        h.innerText = "Please, enter the 'Date' which you want to see MARS rover photos."
        divG.appendChild(div)
        div.appendChild(h)
    }
}

// Function generateMarsPhotoAPIUrl - generate API url.
function generateMarsPhotoAPIUrl(date) {
    return `${ENDPOINT_MARS_ROVER_PHOTOS}?page=3&api_key=${API_KEY}&earth_date=${date}`
}

// Function loadMarsRoverPhotoData - get data photo with fetch.
function loadMarsRoverPhotoData(url) {
    // let xhr = new XMLHttpRequest()
    // xhr.open("GET", ENDPOINT_MARS_ROVER_PHOTOS)
    // xhr.onload = parseMarsRoverPhotoData
    // xhr.send()

    // uses JS Promise
    fetch(url)
        .then(response => response.json())
        .then(parseMarsRoverPhotoData)
}

// Function parseMarsRoverPhotoData - parse glider DOM.
function parseMarsRoverPhotoData(data) {
    // let xhr = e.target
    // let data = JSON.parse(xhr.responseText)
    createGliderDOM(data)
    firstViewPage()
}

// Function createGliderDOM - create glider DOM.
function createGliderDOM (data) {
    let slidesContainer = document.querySelector('#gallery .glider-contain')
    let existingGlider = document.querySelector('.glider')
    if (existingGlider) {
        existingGlider.remove()
    }
    let newGlider = document.createElement('div')
    newGlider.classList.add('glider')
    data.photos.forEach(photo => {
        let div = document.createElement('div')
        div.appendChild(document.createElement('img'))
        div.firstElementChild.src = photo.img_src
        div.appendChild(document.createElement('h2'))
        div.lastElementChild.innerText = photo.earth_date
        div.appendChild(document.createElement('h3'))
        div.lastElementChild.innerText = photo.camera.full_name
        newGlider.appendChild(div)
    })
    slidesContainer.insertBefore(newGlider, slidesContainer.childNodes[6])
    newGlide()
}

// Function newGlide - create glider.
function newGlide() {
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 3,
        slidesToScroll: 3,
        draggable: true,
        dots: '.dots',
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        },
        dotsClass: 'dots',
    })
}

// Function firstViewPage - when the load page hide arrow.
function firstViewPage () {
    let glide = document.querySelector(".glider-track")
    if (glide == null) {
        document.getElementById('prev').style.display = "none"
        document.getElementById('next').style.display = "none"
    }
    else {
        document.getElementById('prev').style.display = "block"
        document.getElementById('next').style.display = "block"
    }
}
