let counterValue = 0

let counterText = document.querySelector('.counterText')

const renderActualValue = () => counterText.innerHTML = `Counter ma teraz swoją unikalną wartość równą: ${counterValue}`

const incFunction = () => counterValue = counterValue + 1
const decFunction = () => counterValue = counterValue - 1

document.querySelector('.incButton').addEventListener('click', () => {  
    incFunction()
    renderActualValue()
})

document.querySelector('.decButton').addEventListener('click', () => {
    decFunction()
    renderActualValue()
})
