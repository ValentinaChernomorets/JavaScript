// DATA SCHEMA //
class MenuItem {
    constructor (id, name, image, price, desc) {
        this.id = id
        this.name = name
        this.image = image
        this.price = price
        this.desc = desc
    }
}

class Food extends MenuItem {
}

class Drinks extends MenuItem {
}

// DATA //
let data = {
    menu: {
        food: [
            new Food(1, "Pizza", "images/pizza.jpg", 100, "Oregano, tomato, olives, mozzarella or other cheese."),
            new Food(2, "Soup", "images/soup.jpg", 50, "Garlic, chicken broth, carrots, olive oil, tomatoes and celery."),
            new Food(3, "Salad", "images/salat.jpg", 25, "The list of salad vegetables includes broccoli, cabbage.")
        ],
        drinks: [
            new Drinks(4, "Cola", "images/cola.jpg", 50, "The original Coca-Cola."),
            new Drinks(5, "Sprite", "images/sprite.jpg", 35, "The original Sprite."),
            new Drinks(6, "Juce", "images/juce.jpg", 60, "The fresh juice.")
        ]
    },
    order: {
        items: [
        ],
        total: 0
    },
    promotions: {
        freeDelivery: {
            limit: 200,
            cost: 0
        },
        discount: {
            limit: 5,
            cost: 0.9
        }
    }
}

//------------------------------Action-------------------------------//
//HW1: remove item by "id" when the checkbox is uchecked.

// Function removeItemOrder - remove item from order //
const removeItemOrder = (id) => {
    // Food
    let indexItemFood = data.menu.food.find(
        item => item.id === id
    )
    // Drinks
    let indexItemDrinks = data.menu.drinks.find(
        item => item.id === id
    )
    // Food
    let activeItemFood = indexItemFood != undefined ? 'itemFood' : ''
    if (activeItemFood == 'itemFood') {
        removeItem(indexItemFood)
    }
    // Drinks
    let activeItemDrinks = indexItemDrinks != undefined ? 'itemDrinks' : ''
    if (activeItemDrinks == 'itemDrinks') {
        removeItem(indexItemDrinks)
    }
}

// Function removeItem - the removing item and recalculate total sum //
const removeItem = (indexItem) => {
    data.order.items.splice(indexItem, 1)
    // let totalOrder = calculateTotalOrder(data.order)
    let totalOrder = totalSumItems()
    if (totalOrder == 0) {
        data.order.total = totalOrder
    } else {
        data.order.total -= indexItem.price
    }
    renderOrder(footerSection, data.order)
}

// Function addItemToOrder - calculate total sum of order //
const addItemToOrder = (id) => {
    // Food
    let selectedItemFood = data.menu.food.find(
        item => item.id === id
    )
    if (selectedItemFood) {
        data.order.total += selectedItemFood.price
        data.order.items.push (
            { itemRef: selectedItemFood, quantity: 1}
        )
    }
    // Drinks
    let selectedItemDrinks = data.menu.drinks.find(
        item => item.id === id
    )
    if (selectedItemDrinks) {
        data.order.items.push (
            { itemRef: selectedItemDrinks, quantity: 1}
        )
        data.order.total += selectedItemDrinks.price
    }
    renderOrder(footerSection, data.order)
}

//--------------------------RENDER----------------------------------//
// Function renderMenuItem - create and render menu item for DOM //
const renderMenuItem = (menuItem, parentElement, handler) => {
    let label = document.createElement('label')
    let input = document.createElement('input')
        input.setAttribute("type", "checkbox")
        input.setAttribute('data-id', menuItem.id)
    let labelText = document.createTextNode(
        `${menuItem.name} ${menuItem.price}`
    )
    let img = document.createElement('img')
    img.src = menuItem.image
    let desc = document.createElement("p")
    desc.classList.add("desc")
    desc.textContent = menuItem.desc
    label.appendChild(input)
    label.appendChild(img)
    label.appendChild(labelText)
    label.appendChild(desc)
    parentElement.appendChild(label)

    input.addEventListener('change', handler) // <--- STRONG COUPLING ->
}

// Function renderItemSet - create fieldset for DOM // 
const renderItemSet = (title) => {
    let fieldset = document.createElement('fieldset')
    let legend = document.createElement('legend')
    let labelText = document.createTextNode(title)
    legend.appendChild(labelText)
    fieldset.appendChild(legend)
    return fieldset
}

// Function renderMenuForm - create and render form DOM // 
let renderMenuForm = (rootElements, menu) => {
    let form = document.createElement('form')
    let foodSet = renderItemSet('Food')
    let drinkSet = renderItemSet('Drinks')

    menu.food.forEach(foodData => {
        renderMenuItem(foodData, foodSet, toggleMenuItemHandler)
    });
    menu.drinks.forEach(drinkData => {
        renderMenuItem(drinkData, drinkSet, toggleMenuItemHandler)
    });

    form.appendChild(foodSet)
    form.appendChild(drinkSet)

    rootElements.appendChild(form)
}

// Function renderMenuItemQuantity - create and render item quantity: increment or dectrement quantity item // 
const renderMenuItemQuantity = (id, decHandler, incHandler) => {
    let div = document.createElement('div')
    let btnDec = document.createElement('button')
        btnDec.addEventListener('click', decHandler)
        btnDec.innerText = "-"
        btnDec.setAttribute('data-id', id)
    let InputQ = document.createElement('input')
        InputQ.value = 1
        InputQ.type = "text"
        InputQ.setAttribute('data-id', id)
    let btnInc = document.createElement('button')
        btnInc.addEventListener('click', incHandler)
        btnInc.innerText = "+"
        btnInc.setAttribute('data-id', id)
    div.appendChild(btnDec)
    div.appendChild(InputQ)
    div.appendChild(btnInc)

    return div
}

// Function renderOrder - render the result of order with dilivery and/or discount //
const renderOrder = (rootElement, order) => {
    // HW*: render in better format total
    if (rootElement.children.length > 0) {
        rootElement.removeChild(rootElement.firstElementChild)
    }
    let div = document.createElement('div')
    div.innerText =  `Order Total Cost: ${order.total}`
    rootElement.append(div)
    // Delivery
    if (order.total >= data.promotions.freeDelivery.limit) {
        renderPromotions (order, 'delivery', div)
    }
    // Discount
    let items = data.order.items
    let limitDiscount = data.promotions.discount.limit
    if (items.length >= limitDiscount) {
        renderPromotions(order, 'discount', div)
    }
}

// Function renderPromotions - render the information about dilivery and/or discount //
const renderPromotions = (order, type, parent) => {
    if (type == 'delivery') {
        let divFreeDelidery = document.createElement('div')
        divFreeDelidery.innerText = `Deliver cost: ${data.promotions.freeDelivery.cost}`
        parent.appendChild(divFreeDelidery)
    }
    if (type == 'discount') {
        let divDiscount = document.createElement('div')
        let costDiscount = data.promotions.discount.cost
        let procent = 100 - (costDiscount * 100)
        let priceWithDiscount = order.total - (order.total / procent)
        divDiscount.innerText = `Discount Cost ( ${procent} )%. With discount SUM TOTAL is: ` + `${priceWithDiscount}`
        parent.appendChild(divDiscount)
    }
}

// EVENTS
// Function toggleMenuItemHandler - add "id" to the toggle. It's help us to detected certain item //
const toggleMenuItemHandler = ( event ) => {
    let toggledInput = event.target
    let label = toggledInput.parentElement
    let id = +toggledInput.dataset.id
    if (toggledInput.checked) {
        let menuItemQuantity = renderMenuItemQuantity(id, decQuantityHandler, incQuantityHandler)
        label.after(menuItemQuantity)
        addItemToOrder( +id )
    } else {
        label.parentElement.removeChild(label.nextElementSibling)
        removeItemOrder( +id )
    }
}

// Function decQuantityHandler - decrement of the quantity//
const decQuantityHandler = ( event ) => {
    eventHandling(event, 'dec')
}

// Function incQuantityHandler - increment of the quantity//
const incQuantityHandler = ( event ) => {
    eventHandling(event, 'inc')
}

// Function eventHandling - for certain selected toggle the decrement or increment quantity of the items//
const eventHandling = (event, operation) => {
// HW*: update and render the total
    event.preventDefault()
    let btnElement = event.target
    let id = +btnElement.dataset.id
    let selected = data.order.items.find(
        item => item.itemRef.id === id
    )
    let input = document.querySelector(`input[data-id="${id}"][type="text"]`)
    if (operation == 'inc') {
        if (selected.quantity >= 1 && selected.quantity <= 4) {
            selected.quantity ++
            input.value = selected.quantity
        }
    } else {
        if (selected.quantity >= 2) {
            selected.quantity--
            input.value = selected.quantity
        }
    }
    let totalSum = totalSumItems()
    data.order.total = totalSum
    renderOrder(footerSection, data.order)
}

// Function totalSumItems - calculate the total sum of items //
const totalSumItems = () => {
    let items = data.order.items
    let totalValue = 0
    for ( var i = 0; i < items.length; i++ ) {
        totalValue += items[i].quantity * items[i].itemRef.price
    }
    return totalValue
}

// ------------------------------------------//
const contentSection = document.querySelector("#content")
const footerSection = document.getElementsByTagName("footer")[0]

renderMenuForm(contentSection, data.menu)
renderOrder(footerSection, data.order)
