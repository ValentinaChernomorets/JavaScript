// Array structure, methods & callbacks

// > IoC (Inversion of Control)
// > callback
// > declarative
// > fucntion interface (predicate, function, ...)
const TYPE = 0
const NAME = 1
const PRICE = 2

const NAME_S = 0
const PRICE_S = 1
const TYPE_S = 2


const menu = [
    ["food",  "Pizza",        100],
    ["drink", "Orange Juice",  25],
    ["food",  "Salad",         15],
    ["food",  "Soup",          50],
    ["drink", "Tea",           75],
]
const menuSort = [
    [ "Pizza",        100, "food"],
    [ "Orange Juice",  25, "drink"],
    [ "Salad",         15, "food"],
    [ "Soup",          50, "food"],
    [ "Tea",           75, "drink"],
]

// 1. Clients wants only drinks
// HW1: Сlient wants to see only food within price range of 50 to 100
menu.filter( item => (item[TYPE] == 'food') && (item[PRICE] >= 50 && item[PRICE] <= 100))


// Custom sort
// 2. Сlient want to see the items sorted
menuSort.sort( (itemA, itemB) => {
    if (itemA[TYPE_S] == "drink" && itemB[TYPE_S] == "food") {
        return -1
    } else if (itemA[TYPE_S] == "food" && itemB[TYPE_S] == "drink") {
        return 1
    } else {
        return 0
    }
})

// HW2: Сlient wants to see everything, with an ascending price
menuSort.sort( (itemA, itemB) => {
    return itemA[PRICE_S] - itemB[PRICE_S];
})

