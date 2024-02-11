// Function getProgrammingLanguageList - get list of programming language.
let languages = []
const getProgrammingLanguageList = () => {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", 'https://en.wikipedia.org/wiki/List_of_programming_languages')
    xhr.onload = () => {
        let response = xhr.responseText
        let parser = new DOMParser()
        let doc = parser.parseFromString(response, 'text/html')
        let anchors = doc.querySelectorAll('div.div-col ul li a')
        languages = [...anchors].map(anchor => {
           return {
                name: anchor.innerHTML,
                url: anchor.href.replace("http://127.0.0.1:5500/", "https://en.wikipedia.org/") // find a better way
            }
        })
    }
    xhr.send()
}

// Function filterProgrammingLanguages - get the filtered language.
const filterProgrammingLanguages = (event) => {
    let input = event.target
    let kw = input.value
    let results = document.getElementById('resultsDiv')
    results.innerHTML = ''
    if (kw.length >= 2) {
        let dropdownUl = document.createElement('ul')
        dropdownUl.className = "dropdown-menu show"
        languages
            .filter(language => {
                return language.name.toLowerCase().startsWith(kw.toLowerCase())
            }).forEach(language => {
                let listItem = document.createElement('li')
                let anchorElement = document.createElement('a')
                anchorElement.innerHTML = language.name
                anchorElement.href = language.url
                anchorElement.className = "dropdown-item"
                anchorElement.addEventListener('click', (event) => {
                    event.preventDefault()
                    getHref(event)
                })
                listItem.appendChild(anchorElement)
                dropdownUl.appendChild(listItem)
            })
            results.appendChild(dropdownUl)
    }
}

// HW1:
// add event listener on result links, capture the event
// don't let the default effect happend
// send another AJAX request on the link's address
// load / parse the doc
// copy the first few paragraphs
// show it in div below

// Function getContent - get the content for certain language.
let content = []
const getContent = (input, callback) => {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", input.href)
    xhr.onload = () => {
        let response = xhr.responseText
        let parser = new DOMParser()
        let doc = parser.parseFromString(response, 'text/html')
        let paragraphs = doc.querySelectorAll('#mw-content-text p')
        let firstSixParagraphs = [...paragraphs].slice(0, 6)
        content = firstSixParagraphs.map(p => {
            return {
                paragraph: p.innerHTML,
            }
        })
        callback(content)
    }
    xhr.send()
}

// Function getHref - get the href of language and print the content.
const getHref = (event) => {
    let input = event.target
    let divContent = document.getElementById("content")
    let div = document.createElement("div")
    divContent.innerHTML = ''
    getContent(input, (result) => {
        result.forEach(content => {
            div.innerHTML += content.paragraph + '<br>'
        })
        divContent.appendChild(div)
    })
}
