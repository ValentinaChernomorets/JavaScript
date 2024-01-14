// DATA SCHEMA
class MenuItem {
    constructor (name, image, price) {
        this.name = name
        this.image = image
        this.price = price
    }
}

class Food extends MenuItem {
}

class Drinks extends MenuItem {
}
// DATA
let data = {
    menu: {
        food: [
            new Food("Pizza", "images/pizza.jpg", 100),
            new Food("Soup", "images/soup.jpg", 50),
            new Food("Salad", "images/salat.jpg", 25)
        ],
        // HW1: Create drinks
        drinks: [
            new Drinks("Cola", "images/cola.jpg", 50),
            new Drinks("Sprite", "images/sprite.jpg", 35),
            new Drinks("Juce", "images/juce.jpg", 60)
        ]
    }
}
// RENDERING
const renderMenuItem = (menuItem, parentElement, handler) => {
    let label = document.createElement('label')
    let input = document.createElement('input')
    input.setAttribute("type", "checkbox")
    let labelText = document.createTextNode(
        `${menuItem.name} ${menuItem.price}`
    )
    label.appendChild(input)
    label.appendChild(labelText)
    parentElement.appendChild(label)

    //  bind event handling
    input.addEventListener('change', handler) // <--- STRONG COUPLING ->
}

const renderItemSet = (title) => {
    let fieldset = document.createElement('fieldset')
    let legend = document.createElement('legend')
    let labelText = document.createTextNode(title)

    legend.appendChild(labelText)
    fieldset.appendChild(legend)
    return fieldset
}

let renderMenuForm = (rootElements, menu) => {
    let form = document.createElement('form') 
    let foodSet = renderItemSet('Food')
    let drinkSet = renderItemSet('Drinks')

    menu.food.forEach(foodData => {
        renderMenuItem(foodData, foodSet, toggleMenuItemHandler)
    });
    menu.food.forEach(drinkData => {
        renderMenuItem(drinkData, drinkSet, toggleMenuItemHandler)
    });

    form.appendChild(foodSet)
    form.appendChild(drinkSet)

    rootElements.appendChild(form)
}

const renderMenuItemQuantity = () =>  {
    
    let div = document.createElement('div')
    let btnDec = document.createElement('button')
        btnDec.innerText = "-"
    let InputQ = document.createElement('input')
        InputQ.value = 1
    let btnInc = document.createElement('button')
        btnInc.innerText = "+"
    div.appendChild(btnDec)
    div.appendChild(InputQ)
    div.appendChild(btnInc)

    return div
}

// EVENTS 
const toggleMenuItemHandler = ( event ) => {
    let toggledInput = event.target
    let label = toggledInput.parentElement

    let menuItemQuantity = renderMenuItemQuantity()

    // label.parentElement.insertBefore(div, label.nextElementSibling)
    label.after(menuItemQuantity)
}

// ------------------------------------------
 // HW* use another way
const contentSection = document.querySelector("#content")
renderMenuForm(contentSection, data.menu)
