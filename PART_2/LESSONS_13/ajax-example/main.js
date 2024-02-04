// HW1: optimaze loadAbout() -> loadFragment(???)
function loadFragment(type) {
    // 1. create comm object
    let xhr = new XMLHttpRequest()
 
    // 2. configure connection
    xhr.open("GET", `partials/${type}.html`)

    // 4. get the response
    xhr.onload = function() {
        document.querySelector('.dynamic').innerHTML = xhr.responseText
    }

    // 3. send the request
    xhr.send()
}