let mainsection = document.querySelector('#section_main')
let preco = document.querySelector('.precoh1')
let car = document.querySelectorAll('.texto_carrinho')
let btn1 = document.querySelector('.option_btn1')
let btn2 = document.querySelector('.option_btn2')
let qtd = 0, total = 0
let botoesremove = []
let carrinho = []

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
    carrinho = JSON.parse(localStorage.getItem('carrinho'))
    localStorage.setItem('carrinho2', JSON.stringify(carrinho))
} else if (JSON.parse(localStorage.getItem('carrinho2')) != null) {
    carrinho = JSON.parse(localStorage.getItem('carrinho'))
    localStorage.setItem('carrinho', JSON.stringify(carrinho))
}

function show_items() {
    total = 0
    carrinho.forEach((element, index) => {
        let selected_product = document.createElement('div')
        let foto = document.createElement('div')
        let text = document.createElement('div')
        let remove = document.createElement('button')
        foto.classList.add('foto_selecionada')
        selected_product.classList.add("produtoSelecionado")
        text.classList.add('texto_selecionado')
        remove.classList.add("btn_remove")
        total += element.preco
        remove.id = index
        remove.textContent = "Remover"
        foto.style.backgroundImage = `url(${element.imagem})`
        mainsection.appendChild(selected_product)
        selected_product.appendChild(foto)
        selected_product.appendChild(text)

        remove.addEventListener('click', () => {
            let id = remove.id
            carrinho.splice(id, 1)
            localStorage.setItem('carrinho2', JSON.stringify(carrinho))
            localStorage.setItem('carrinho', JSON.stringify(carrinho))
            mainsection.innerHTML = ""
            show_page()
        })

        if (element.tipo == "roupa") {
            let str = `<h2>${element.nome}</h2><br><h2>Tamanho: ${element.tamanho}</h2><br><h2>Cor: ${element.cor}</h2><br><h2>Quantidade disponível: ${element.qtd}</h2><br>
            <h1>PREÇO:R$ ${element.preco}</h1>`
            text.innerHTML = str
            text.appendChild(remove)
        } else if (element.tipo == "bola") {
            let str = `<h2>${element.nome}</h2><br><h2>Cor: ${element.cor}</h2><br><h2>Quantidade disponível: ${element.qtd}</h2><br>
            <h1>PREÇO:R$ ${element.preco}</h1>`
            text.innerHTML = str
            text.appendChild(remove)
        }
    });

    if (carrinho.length == 0) {
        empty = document.createElement('h1')
        empty.textContent = "VAZIO"
        mainsection.appendChild(empty)
        preco.textContent = `TOTAL:${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
        return
    }
}

function show_page() {
    show_items()
    botoesremove = document.querySelectorAll('.btn_remove')
    preco.textContent = `TOTAL:${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    qtd = carrinho.length
    car.forEach(element =>{
        element.textContent = `Carrinho(${qtd})`
    })
}

show_page()
qtd = carrinho.length
car.forEach(element =>{
    element.textContent = `Carrinho(${qtd})`
})

