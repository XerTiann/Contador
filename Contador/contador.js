const input = document.querySelector('#contador')
const btnSumar = document.querySelector('.sumar')
const btnRestar = document.querySelector('.restar')
const btnReset = document.querySelector('.reset')
const btnDark = document.querySelector('.dark-light')

let valor = 0
let dark = false

function actualizarBotonRestar() {
    btnRestar.disabled = valor === 0
}

function actualizarColor() {
    if(valor > 0) {
        input.className = 'positivo'
    } else if(valor === 0) {
        input.className = 'cero'
    } else if(valor < 0) {
        input.className = 'negativo'
    }
}

actualizarColor()

btnSumar.addEventListener('click', () => {
    valor++
    input.value = valor  
    actualizarColor()
})

btnRestar.addEventListener('click', () => {
    valor--
    input.value = valor   
    actualizarColor()   
})

btnReset.addEventListener('click', () => {
    valor = 0
    input.value = valor  
    actualizarColor()
})

btnDark.addEventListener('click', () => {
    if(dark === false) {
        document.body.classList.add('oscuro')
        document.body.classList.remove('luz')
        dark = true    
    } else {
        document.body.classList.add('luz')
        document.body.classList.remove('oscuro')
        dark = false
    }
})
