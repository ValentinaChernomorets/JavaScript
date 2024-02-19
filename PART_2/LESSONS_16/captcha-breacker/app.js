
// HW1: find out how to add error handling
// HW2: finish the diagram
const breackCaptcha = (captcha, callback) => {
    // Check first if captcha is 'string'
    if (typeof captcha !== 'string')
        throw new TypeError("This function accepts only STRING captcha!")
    // If captcha is 'string' split it
    setTimeout(()=> {
        let solution = captcha.split("")
        callback(solution)
    }, 1000)

    return captcha.split("")
}