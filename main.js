window.onload = () => {
    const inputs = document.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        input.checked = false
    }
}


const containerPosition = document.querySelector('#container-position')
const quadroPosition = containerPosition.querySelector('.quadro')
const elementoPositon = quadroPosition.querySelector('.elemento') 
const controladorPosition = containerPosition.querySelector('.controlador')
const inputsPosition = controladorPosition.querySelectorAll("input")

for (let i = 0; i < inputsPosition.length; i++) {
    const element = inputsPosition[i];
    element.addEventListener('change', (event) => {
        switch (event.target) {
            case inputsPosition[0]:
                elementoPositon.classList.toggle("absolute")
                break;
            case inputsPosition[1]:
                elementoPositon.classList.toggle("top")
                break;
            case inputsPosition[2]:
                elementoPositon.classList.toggle("left")
                break;
            case inputsPosition[3]:
                elementoPositon.classList.toggle("transform")
                break;
        }
    })
}

const containerflex = document.querySelector('#container-flex')
const quadroFlex = containerflex.querySelector('.quadro')
const controladorFlex = containerflex.querySelector('.controlador')
const inputsFlex = controladorFlex.querySelectorAll("input")

for (let i = 0; i < inputsFlex.length; i++) {
    const element = inputsFlex[i];
    element.addEventListener('change', (event) => {
        switch (event.target) {
            case inputsFlex[0]:
                quadroFlex.classList.toggle("display")
                break;
            case inputsFlex[1]:
                quadroFlex.classList.toggle("align-items")
                break;
            case inputsFlex[2]:
                quadroFlex.classList.toggle("justify-content")
                break;
        }
    })
}

const containerMargin = document.querySelector('#container-margin')
const quadroMargin = containerMargin.querySelector('.quadro')
const elementoMargin = quadroMargin.querySelector('.elemento') 
const controladorMargin = containerMargin.querySelector('.controlador')
const inputsMargin = controladorMargin.querySelectorAll("input")

for (let i = 0; i < inputsMargin.length; i++) {
    const element = inputsMargin[i];
    element.addEventListener('change', (event) => {
        switch (event.target) {
            case inputsMargin[0]:
                elementoMargin.classList.toggle("margin")
                break;
        }
    })
}

const containerGrid = document.querySelector('#container-grid')
const quadroGrid = containerGrid.querySelector('.quadro')
const controladorGrid = containerGrid.querySelector('.controlador')
const inputsGrid = controladorGrid.querySelectorAll("input")

for (let i = 0; i < inputsGrid.length; i++) {
    const element = inputsGrid[i];
    element.addEventListener('change', (event) => {
        switch (event.target) {
            case inputsGrid[0]:
                quadroGrid.classList.toggle("display-grid")
                break;
            case inputsGrid[1]:
                quadroGrid.classList.toggle("place-content")
                break;
        }
    })
}