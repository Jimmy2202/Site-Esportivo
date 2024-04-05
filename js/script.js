let index = 1, qtd = 0
let button_prev = document.querySelector('.prevBtn')
let button_next = document.querySelector('.nextBtn')
let carroseldiv = document.querySelector('.carrossel')
let btn1 = document.querySelector('.option_btn1')
let btn2 = document.querySelector('.option_btn2')
let car = document.querySelectorAll('.texto_carrinho')
let carrinho2 = []

btn1.addEventListener('click', () =>{
    if(document.querySelector('.dropdown_options1').style.display === "none" || document.querySelector('.dropdown_options1').style.display === "none"){
        document.querySelector('.dropdown_options1').style.display = "flex"
    }else{
        document.querySelector('.dropdown_options1').style.display = "none"
    }
})

btn2.addEventListener('click', () =>{
    if(document.querySelector('.dropdown_options2').style.display === "none" || document.querySelector('.dropdown_options2').style.display === "none"){
        document.querySelector('.dropdown_options2').style.display = "flex"
    }else{
        document.querySelector('.dropdown_options2').style.display = "none"
    }
})

if (JSON.parse(localStorage.getItem('carrinho')) != null) {
    carrinho2 = JSON.parse(localStorage.getItem('carrinho'))
    localStorage.setItem('carrinho2', JSON.stringify(carrinho2))
}

if (carrinho2.length != 0) {
    qtd = carrinho2.length
}

car.forEach(element =>{
    element.textContent = `Carrinho(${qtd})`
})

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

