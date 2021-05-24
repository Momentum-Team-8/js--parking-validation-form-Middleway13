console.log('Add validation!');
const form = document.querySelector("#parking-form");
// console.log("form", form)
const nameInput = document.querySelector("#name-field");
// console.log("nameInput", nameInput)

let formIsValid; 

let error = document.createElement("div")

form.addEventListener('input', event => {

})
function validateNameInput() {
    if (nameInput.value === undefined) {
        console.log("input invalid")
        formIsValid = false
        document.querySelector("#name-field").classList.add('input-invalid')
        document.querySelector('#name-field').appendChild(error).innerHTML = 'This field is required.'
    }
}

form.addEventListener('submit', event => {
    event.preventDefault()
    validateNameInput()
//     if (formIsValid === false) {
    
// } else {
//     formIsValid = true
// }
})

let carInput = document.querySelector("#car-field")

form.addEventListener('input', event => {

})
function validateCarInput() {
    if (carInput === undefined) {
        console.log("input invalid")
        formIsValid = false
        document.querySelector("#car-field").classList.add('input-invalid')
        document.querySelector("#car-field").appendChild(error).innerHTML = 'This field is required.'
    }
}
form.addEventListener('submit', event => {
    event.preventDefault()
    validateCarInput
})