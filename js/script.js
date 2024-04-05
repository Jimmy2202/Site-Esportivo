let index = 1, qtd = 0
let button_prev = document.querySelector('.prevBtn')
let button_next = document.querySelector('.nextBtn')
let carroseldiv = document.querySelector('.carrossel')
let car = document.querySelector('.texto_carrinho')
let carrinho2 = []

if (JSON.parse(localStorage.getItem('carrinho')) != null) {
    carrinho2 = JSON.parse(localStorage.getItem('carrinho'))
    localStorage.setItem('carrinho2', JSON.stringify(carrinho2))
}

if (carrinho2.length != 0) {
    qtd = carrinho2.length
}

car.textContent = `Carrinho(${qtd})`

if (index == 1) {
    carroseldiv.style.backgroundImage = `url(images/roupas${index}.jpg)`
}

button_prev.addEventListener('click', e => {
    if (index != 1) {
        carroseldiv.style.backgroundImage = `url(images/roupas${index - 1}.jpg)`
        index--
    }
})

button_next.addEventListener('click', e => {
    if (index != 4) {
        carroseldiv.style.backgroundImage = `url(images/roupas${index + 1}.jpg)`
        index++
    }
})
