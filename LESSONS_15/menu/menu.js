let menuItems = [
    {
        title: "Team",
        menu: [
            {
                title: "CEO: Jack",
            },
            {
                title: "DEV: John Doue",
            },
        ]
    },
    {
        title: "Services",
        icon: `<i class="fas fa-smile"></i>`,
        menu: [
            {
                title: "Web develoment",
            },
            {
                title: "App testing",
            },
            {
                title: "App design",
            },
        ]
    },
    {
        title: "Reviews",
    },
    {
        title: "Order",
        url: "/order"
    },
    {
        title: "Contacts",
    },
]

const renderMenu = function (parentElement, items) {
    // HW1:
    // refacor this code so it the renders the icon where there is icon
    let html = `<ul>`
    for (let i=0; i<items.length; i++) {
        html += `<li>
            ${items[i].icon ?? ''}
            <a href="${items[i].url ?? '#'}" onclick="renderSubMenu(${i}, ${items[i].menu != undefined})">
                ${items[i].title}
            </a>
        </li>`
    }
    html += `</ul>`
    parentElement.innerHTML += html
}

const renderSubMenu = function (index, render) {
    if (render) {
        let li = document.querySelector(`li:nth-child(${index+1})`)
        if (!menuItems[index].open) {
            renderMenu(li, menuItems[index].menu)
            menuItems[index].open = true
        } else {
            navBar.innerHTML = ``
            renderMenu(navBar, menuItems)
            menuItems[index].open = false
        }
    }
}

renderMenu(navBar, menuItems)
