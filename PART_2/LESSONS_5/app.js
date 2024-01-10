class Food {
    constructor (name, image, price) {
        this.name = name
        this.image = image
        this.price = price
    }
}

class Drinks {
    constructor (name, image, price) {
        this.name = name
        this.image = image
        this.price = price
    }
}

let renderMenuForm = (rootElements, menu) => {
    // Food //
    let fieldsetFormFood = renderForm(rootElements,'Food')
    let formFood = document.createElement('form') 
    menu.food.forEach(fooData => {
        renderLable(fooData, formFood)
    });
    fieldsetFormFood.appendChild(formFood)

    // Drinks //
    let fieldsetFormDrinks = renderForm(rootElements,'Drinks')
    let formDrinks = document.createElement('form')
    menu.drinks.forEach(drinksData => {
        renderLable(drinksData, formDrinks)
    })
    fieldsetFormDrinks.appendChild(formDrinks)
}

function renderForm (rootElements, nameForm) {
    let fieldsetForm = document.createElement('fieldset')
    let legendForm = document.createElement('legend')
    let legendText = document.createTextNode(`${nameForm}`)

    rootElements.appendChild(fieldsetForm)
    fieldsetForm.appendChild(legendForm)
    legendForm.appendChild(legendText)

    return fieldsetForm
}

function renderLable (data, form) {
    let label = document.createElement('label')
    let input = document.createElement('input')
    input.setAttribute("type", "checkbox")
    let labelText = document.createTextNode(
        `${data.name} ${data.price}`
    )
    label.appendChild(input)
    label.appendChild(labelText)
    form.appendChild(label)
}

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
// ------------------------------------------
 // HW* use another way
const contentSection = document.querySelector("#content")

renderMenuForm(contentSection, data.menu)
