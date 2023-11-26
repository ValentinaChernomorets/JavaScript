const renderProducts = function () {
    for (let i=0; i<products.length; i++) {
        catalogDiv.innerHTML += `
            <div class="product">
                <h2>${products[i].name}</h2>
                <img src="${products[i].image}"/>
                <p>${products[i].price} lei</p>
                <button 
                    onclick="buy(${i})"
                    ${products[i].available ? '' : 'disabled'}>BUY
                </button>
            </div>
        `
    }
}

const buy = function (index) {
    cart.push(index)
    renderCart()
}

const renderCart = function () {
    let img = ''
    // HW1: 
    // add condition so it renders "empty" if no products in the cart. Icon cart

    // HW2: 
    // add total of all selected items
    if (cart.length == 0) {
        img = '<img src="images/cart_empty.png" />'
    } else {
        img = '<img src="images/cart_added.png" />'
    }
    let sum = 0;
    for (let i=0; i<cart.length; i++) {
        let selected_index = cart[i]
        sum += products[selected_index].price
    }
    cartDiv.innerHTML = cart.length != 0 ? `${img}: ${cart.length} <div class="sum">Total: ${sum} lei</div> ` : `${img} Empty`
}
