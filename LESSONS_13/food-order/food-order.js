// DATA //
let foodNames = ["Pizza", "Salad", "Soup"]
let foodPrices = [ 100.00, 75.00, 50.00]

// LOGIC //
let menu = `
    ##########################
              MENU
    ##########################
`
for (let i=0; i<foodNames.length; i++) {
    menu += `${i+1}. ${foodNames[i]}\n`
}
menu += `Choose: `

let option = parseInt(prompt(menu)) - 1 

let optionDescription = `
    You've chosen:
    "${foodNames[option]}"
    1 portion - ${foodPrices[option]}
    How many do you want?
`
let portions = parseInt(prompt(optionDescription))

let cost = foodPrices[option] * portions

let orderDescription = `
    Your order:
    "${foodNames[option]}": ${portions} X ${foodPrices[option]} = ${cost}
`
// HW1:
// add a confirm() thar asks if client want delivery
// - if the client denies then print a message that he has to pick up
// - if client eccepts, then show delivery free 
// - if he ordered for more than 500, else show delivery +50
alert(orderDescription)

delivery = confirm("Do you want delivery?")
if (delivery == true) {
    result = cost >= 500 ? "You delivery is free!" : "You delivery is cost +50.00 ";
    alert(result)
} else {
    alert("Please pick up you order.")
}