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