// Function saveFormData: save data to local storage
const saveFormData = (e) => {
    e.preventDefault()
    let form = e.target
    let inputs = [...form.querySelectorAll('input')]
    let data = inputs
    .filter(input => input.type != 'password')
    .reduce((acc, input) => {
        acc[input.id] = input.value
        return acc
    }, {})
    let jsonData = JSON.stringify(data)
    localStorage.setItem(`formData-${data.name.toLowerCase()}`, jsonData)
}

// Function loadFormData: load data automatically to the form and when clear name, clear all the other data
const loadFormData = (e) => {
    let input = e.target
    let name = input.value
    //HW2: find the "case insesitive"
    let foundKey = Object.keys(localStorage).find(
        key => key.startsWith("formData-") && key.endsWith(name.toLowerCase()))
    if (foundKey && name.length > 0) {
        let data = JSON.parse(localStorage.getItem(foundKey))
        Object.keys(data).forEach(key => {
            value = data[key]
            document.querySelector(`#${key}`).value = value
        })
    } else {
        // HW1: clear every input
        let inputElements = document.querySelectorAll('input');
        input.addEventListener('input', function() {
            if (this.value === '') {
                inputElements.forEach(input => {
                    input.value = '';
                });
            }
        });
    }
}

//-----------------
document.querySelector('form [id="name"]').addEventListener('keyup', loadFormData)
document.forms[0].addEventListener('submit', saveFormData)