// DATA SCHEMA
class MenuItem {
    constructor (id, name, image, price) {
        this.id = id
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
            new Food(1, "Pizza", "images/pizza.jpg", 100),
            new Food(2, "Soup", "images/soup.jpg", 50),
            new Food(3, "Salad", "images/salat.jpg", 25)
        ],
        drinks: [
            new Drinks(4, "Cola", "images/cola.jpg", 50),
            new Drinks(5, "Sprite", "images/sprite.jpg", 35),
            new Drinks(6, "Juce", "images/juce.jpg", 60)
        ]
    },
    order: {
        items: [
        ]
    }
}


//HW1: remove item by id when the checkbox is uchecked. Callback new 
const removeItemOrder = (id) => {
    let indexItem = data.menu.food.findIndex(
        item => item.id === id
    )
    data.order.items.splice(indexItem, 1)
}

const addItemToOrder = (id) => {
    let selectedItem = data.menu.food.find(
        item => item.id === id
    )
    data.order.items.push (
        { itemRef: selectedItem, quantity: 1 }
    )
}

// RENDER
const renderMenuItem = (menuItem, parentElement, handler) => {
    let label = document.createElement('label')
    let input = document.createElement('input')
        input.setAttribute("type", "checkbox")
        input.setAttribute('data-id', menuItem.id)

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

const renderMenuItemQuantity = (id, decHandler, incHandler) =>  {
    let div = document.createElement('div')
    let btnDec = document.createElement('button')
        btnDec.addEventListener('click', decHandler)
        btnDec.innerText = "-"
        btnDec.setAttribute('data-id', id)
    let InputQ = document.createElement('input')
        InputQ.value = 1
    let btnInc = document.createElement('button')
        btnInc.addEventListener('click', incHandler)
        btnInc.innerText = "+"
        btnInc.setAttribute('data-id', id)
    div.appendChild(btnDec)
    div.appendChild(InputQ)
    div.appendChild(btnInc)

    return div
}

// EVENTS 
const toggleMenuItemHandler = ( event ) => {
    let toggledInput = event.target
    let label = toggledInput.parentElement
    let id = +toggledInput.dataset.id
    if (toggledInput.checked) {
        let menuItemQuantity = renderMenuItemQuantity(id, decQuantityHandler, incQuantityHandler)
        // label.parentElement.insertBefore(div, label.nextElementSibling)
        label.after(menuItemQuantity)
        addItemToOrder( +id )
    } else {
        label.parentElement.removeChild(label.nextElementSibling)
        removeItemOrder( +id )
    }
}
// HW2: finish decrement
// HW3: add limit for quantity in range 1..5
// HW4: update the value in the input
const decQuantityHandler = ( event ) => {
    eventHandling(event, 'dec')
}

const incQuantityHandler = ( event ) => {
    eventHandling(event, 'inc')
}

const eventHandling = (event, operation) => {
   let btnElement = event.target
    let id = +btnElement.dataset.id
    let selected = data.order.items.find(
        item => item.itemRef.id === id
    )
    if (operation == 'inc') {
        let input =  btnElement.previousSibling
        if (selected.quantity >= 1 && selected.quantity <= 4) {
            selected.quantity ++
            input.value = selected.quantity
        }
    } else {
        let input =  btnElement.nextElementSibling
        if ( selected.quantity >= 2) {
            selected.quantity --
            input.value = selected.quantity
        }
    }
     // HW*: find it throught the hierarchy - need to event
    // let div = btnElement.parentNode
    // let sibling = div.previousSibling
    // let child = sibling.firstChild
    // let idNew = +child.dataset.id
    event.preventDefault() 
}
// ------------------------------------------
const contentSection = document.querySelector("#content")
renderMenuForm(contentSection, data.menu)
