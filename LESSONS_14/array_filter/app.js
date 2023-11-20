function filterInput () {
    let value = phoneInput.value.split('')
    filteredValue = []
    for (let i=0; i<value.length; i++) {
        if (value[i] >= '0' && value[i] <= '9' && pattern[i] == '#') {
            filteredValue.push(value[i])
        } else if ( value[i] == pattern[i] && pattern[i] != '#') {
            filteredValue.push(value[i])
        } else {
            break;
        }
    }
    phoneInput.value = filteredValue.join('')

    // HW1: 
    // collect clean number without the separators - as Array ---> ['1','2','3']
    let arrayClean = []
    filteredValue.forEach((item) => {
        if (item != "/" && item != "-") {
            arrayClean.push(item)
        }
    });
    console.log(arrayClean)
}

let pattern = [ "#", "#", "#", "/", "2", "#", "#", "#", "-", "#", "#", "#", "-", "#", "#" ]
let filteredValue = []
