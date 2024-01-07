// Create div
const div = document.createElement('div');

// add class "wrapper"
div.classList.add('wrapper');

// create this div in body
const body = document.querySelector('body')
body.appendChild(div);

// Create head h1 in DOM
const header = document.createElement('h1')
header.textContent = 'DOM - Document Object Model'
// add h1 before DIV with class wrapper
div.insertAdjacentElement('beforebegin', header)

// Create <ul></ul>
// Add in 3 elements with text "1,2,3"

const ul = `
    <ul>
        <li><a href="#">2023 Kia Telluride vs. 2023 Hyundai Palisade</a></li>
        <li><a href="#">2023 Honda Accord vs. 2023 Toyota Camry</a></li>
        <li><a href="#">2023 Ford F-150 vs. 2023 Chevrolet Silverado 1500</a></li>
    </ul>
`
// Push the list inside element with class wrapper
div.innerHTML = ul

// Create image
const img = document.createElement('img')
// Add the nest source to image
// 1. Add attributes source
img.src = `image/cars.jpg`
// 2. Add attributes width with 240 px
img.width = 240
// 3. Add class "super"
img.classList.add('super')
// 4. Add alt with "Super Man"
img.alt = 'Super Man'

//Push img inside element with class wrapper
div.appendChild(img)

// Use HTML string, create DIV with class 'pDiv' + with 2 paragraf
const elemHTML = `
    <div class='pDiv'>
        <p>Paragraf 1</p>
        <p>Paragraf 2</p>
    </div>    
`

// Push this DIV before element <ul></ul>
const ulList = div.querySelector('ul')
ulList.insertAdjacentHTML('beforebegin', elemHTML)

// Add to second paragraf class text
const pDiv = document.querySelector('.pDiv')
pDiv.children[1].classList.add('text')
//Delete first paragraf
pDiv.firstElementChild.remove()

// Create function generateAutoCard, whish permit 3 arg: brand, color, year
const generateAutoCard = (brand, color, year) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return `
        <div class="autoCard">
            <h2>${brand.toUpperCase()} ${year}</h2>
            <p>Auto ${brand.toUpperCase()} - ${year} year. The age of auto - ${currentYear - year} year.</p>
            <p>Color: ${color}</p>
            <button type='button' class='btn'>Delete</button>
        </div>
    `
}
// The function must to return HTML
/* <div class="autoCard">
    <h2><h2/>
    <p>Auto BRAND - YEAR year. The age of auto - YEAR year.</p>
<div/> */
// Create new DIV with class autos
const carsDiv = document.createElement('div')
carsDiv.classList.add('autos');

// Create 3 carts auto, use function generateAutoCard
const carsList = [
    {brand: 'Tesla', year: 2015, color: 'red'},
    {brand: 'Lexus', year: 2016, color: 'silver'},
    {brand: 'Nissan', year: 2021, color: 'black'},
]

const carsHTML = carsList.map(car => {
    return generateAutoCard(car.brand, car.color, car.year);
}).join('');
carsDiv.innerHTML = carsHTML;
// Push DIV in class autos on page DOM - before DIV with classs wrapper 
div.insertAdjacentElement('beforebegin', carsDiv)

// On click btn delete cart from DOM 
// 1. Choose all btn
const buttons = document.querySelectorAll('.btn')
// 2. Create function delete
function handleClick (e) {
    const currentButton = e.currentTarget;
    currentButton.closest('.autoCard').remove()
    // console.log(currentButton.parentElement)
}
// 3. Use circle - which would be event handler on each button
buttons.forEach(button => {
    button.addEventListener('click', handleClick)
});

// console.log(carsDiv);
