let productsdiv = document.querySelector('.products')
let sessao = document.querySelector('#section_main2')
let objeto_selecionado, qtd = 0
let car = document.querySelector('.texto_carrinho')
let comprar = document.createElement('button')
let carrinho = []
const image = new Image()

let produtos = [
    {
        id: 1,
        tipo: "roupa",
        nome: "Camisa Masculina Fla",
        time: "Flamengo",
        sexo: "Masculino",
        cor: "Vermelho",
        tamanho: "P",
        qtd: 20,
        preco: 50.99,
        imagem: "images/roupas1.jpg"
    },
    {
        id: 2,
        tipo: "roupa",
        nome: "Camisa Masculina Fla",
        time: "Flamengo",
        sexo: "Masculino",
        cor: "Vermelho",
        tamanho: "M",
        qtd: 10,
        preco: 90.00,
        imagem: "images/roupas1.jpg"
    },
    {
        id: 3,
        tipo: "roupa",
        nome: "Camisa Masculina Fla",
        time: "Flamengo",
        sexo: "Masculino",
        cor: "Vermelho",
        tamanho: "G",
        qtd: 60,
        preco: 120.00,
        imagem: "images/roupas1.jpg"
    },
    {
        id: 4,
        tipo: "roupa",
        nome: "Camisa Masculina Vas",
        time: "Vasco",
        sexo: "Masculino",
        cor: "Preto",
        tamanho: "P",
        qtd: 50,
        preco: 40.00,
        imagem: "images/roupas4.jpg"
    },
    {
        id: 5,
        tipo: "roupa",
        nome: "Camisa Masculina Vas",
        time: "Vasco",
        sexo: "Masculino",
        cor: "Preto",
        tamanho: "M",
        qtd: 20,
        preco: 70.00,
        imagem: "images/roupas4.jpg"
    },
    {
        id: 6,
        tipo: "roupa",
        nome: "Camisa Feminina Vas",
        time: "Vasco",
        sexo: "Feminino",
        cor: "Preto",
        tamanho: "P",
        qtd: 90,
        preco: 20.00,
        imagem: "images/roupas4.jpg"
    },
    {
        id: 7,
        tipo: "roupa",
        nome: "Camisa Feminina Fla",
        time: "Flamengo",
        sexo: "Feminino",
        cor: "Branca e Vermelha",
        tamanho: "G",
        qtd: 50,
        preco: 50.00,
        imagem: "images/roupas1.jpg"
    },
    {
        id: 8,
        tipo: "bola",
        esporte: "futebol",
        nome: "Bola 1",
        cor: "Branca e Preta",
        qtd: 50,
        preco: 50.00,
        imagem: "images/bola1.png"
    },
    {
        id: 9,
        tipo: "bola",
        esporte: "futebol",
        nome: "Bola 2",
        cor: "Branca e Vermelha",
        qtd: 50,
        preco: 50.00,
        imagem: "images/bola2.png"
    },
    {
        id: 10,
        tipo: "bola",
        esporte: "basquete",
        nome: "Bola NBA",
        cor: "Branca e Preta",
        qtd: 50,
        preco: 50.00,
        imagem: "images/bola3.png"
    },
    {
        id: 11,
        tipo: "roupa",
        nome: "Camisa Masculina Flu",
        time: "Fluminense",
        sexo: "Masculino",
        cor: "Branco, Grená e Verde",
        tamanho: "P",
        qtd: 120,
        preco: 60.00,
        imagem: "images/roupas2.jpg"
    },
    {
        id: 7,
        tipo: "roupa",
        nome: "Camisa Masculina Flu",
        time: "Fluminense",
        sexo: "Masculino",
        cor: "Branco, Grená e Verde",
        tamanho: "M",
        qtd: 90,
        preco: 80.00,
        imagem: "images/roupas2.jpg"
    },
    {
        id: 7,
        tipo: "roupa",
        nome: "Camisa Masculina Flu",
        time: "Fluminense",
        sexo: "Masculino",
        cor: "Branco, Grená e Verde",
        tamanho: "g",
        qtd: 90,
        preco: 100.00,
        imagem: "images/roupas2.jpg"
    },
    {
        id: 7,
        tipo: "roupa",
        nome: "Camisa Masculina Vas",
        time: "Vasco",
        sexo: "Masculino",
        cor: "Preto e Branco",
        tamanho: "G",
        qtd: 50,
        preco: 70.00,
        imagem: "images/roupas4.jpg"
    },
    {
        id: 7,
        tipo: "roupa",
        nome: "Camisa Masculina Bota",
        time: "Botafogo",
        sexo: "Masculino",
        cor: "Preto e Branco",
        tamanho: "G",
        qtd: 90,
        preco: 50.00,
        imagem: "images/roupas3.jpg"
    },
    {
        id: 7,
        tipo: "roupa",
        nome: "Camisa Masculina Bota",
        time: "Botafogo",
        sexo: "Masculino",
        cor: "Preto e Branco",
        tamanho: "M",
        qtd: 90,
        preco: 30.00,
        imagem: "images/roupas3.jpg"
    },
    {
        id: 7,
        tipo: "roupa",
        nome: "Camisa Feminina Bota",
        time: "Botafogo",
        sexo: "Feminino",
        cor: "Preto e Branco",
        tamanho: "M",
        qtd: 20,
        preco: 50.00,
        imagem: "images/roupas3.jpg"
    }
]

if (JSON.parse(localStorage.getItem('carrinho2')) != null) {
    carrinho = JSON.parse(localStorage.getItem('carrinho2'))
}

if (carrinho.length != 0) {
    qtd = carrinho.length
}

car.textContent = `Carrinho(${qtd})`

function getParameterURL(nome) {
    const parametrosUrl = new URLSearchParams(window.location.search)
    return parametrosUrl.get(nome)
}

const identifier_tipo = getParameterURL('tipo')
const identifier_sexo = getParameterURL('sexo')
const identifier_esporte = getParameterURL('esporte')

if (identifier_tipo == "roupa") {
    if (identifier_sexo == "masculino") {
        produtos.forEach(function (element, index) {
            if (element.sexo == "Masculino") {
                let div_produto = document.createElement('div')
                let div = document.createElement('div')
                let indice = index
                div.classList.add("real_product")
                div_produto.classList.add("produto_div")
                div_produto.id = `${indice}`
                div.style.backgroundImage = `url(${element.imagem})`
                div_produto.textContent = element.nome
                oi = div_produto
                div_produto.appendChild(div)
                productsdiv.appendChild(div_produto)
            }
        })
    } else {
        produtos.forEach(function (element, index) {
            if (element.sexo == "Feminino") {
                let div_produto = document.createElement('div')
                let div = document.createElement('div')
                let indice = index
                div.classList.add("real_product")
                div_produto.classList.add("produto_div")
                div_produto.id = `${indice}`
                div.style.backgroundImage = `url(${element.imagem})`
                div_produto.textContent = element.nome
                oi = div_produto
                div_produto.appendChild(div)
                productsdiv.appendChild(div_produto)
            }
        })
    }
} else if (identifier_tipo == "bola") {
    if (identifier_esporte == "futebol") {
        produtos.forEach(function (element, index) {
            if (element.esporte == "futebol") {
                let div_produto = document.createElement('div')
                let div = document.createElement('div')
                let indice = index
                div.classList.add("real_product")
                div_produto.classList.add("produto_div")
                div_produto.id = `${indice}`
                div.style.backgroundImage = `url(${element.imagem})`
                div_produto.textContent = element.nome
                oi = div_produto
                div_produto.appendChild(div)
                productsdiv.appendChild(div_produto)
            }
        })
    } else {
        produtos.forEach(function (element, index) {
            if (element.esporte == "basquete") {
                let div_produto = document.createElement('div')
                let div = document.createElement('div')
                let indice = index
                div.classList.add("real_product")
                div_produto.classList.add("produto_div")
                div_produto.id = `${indice}`
                div.style.backgroundImage = `url(${element.imagem})`
                div_produto.textContent = element.nome
                oi = div_produto
                div_produto.appendChild(div)
                productsdiv.appendChild(div_produto)
            }
        })
    }
}

function show_product(produto) {
    if (produto.tipo == "roupa") {
        objeto_selecionado = produto
        productsdiv.style.display = "none"
        let selected_product = document.createElement('div')
        let foto = document.createElement('div')
        let text = document.createElement('div')
        let str = `<h2>${produto.nome}</h2><br><h2>Tamanho: ${produto.tamanho}</h2><br><h2>Cor: ${produto.cor}</h2><br><h2>Quantidade disponível: ${produto.qtd}</h2><br>
        <h1>PREÇO:R$ ${produto.preco}`
        foto.classList.add('foto_selecionada')
        selected_product.classList.add("produtoSelecionado")
        text.classList.add('texto_selecionado')
        comprar.classList.add('btn_compra')
        comprar.textContent = "COMPRAR"
        foto.style.backgroundImage = `url(${produto.imagem})`
        text.innerHTML = str
        sessao.appendChild(selected_product)
        selected_product.appendChild(foto)
        selected_product.appendChild(text)
        selected_product.appendChild(comprar)

    } else if (produto.tipo == "bola") {

        objeto_selecionado = produto
        productsdiv.style.display = "none"
        let selected_product = document.createElement('div')
        let foto = document.createElement('div')
        let text = document.createElement('div')
        let str = `<h2>${produto.nome}</h2><br><h2>Cor: ${produto.cor}</h2><br><h2>Quantidade disponível: ${produto.qtd}</h2><br>
        <h1>PREÇO:R$ ${produto.preco}`
        foto.classList.add('foto_selecionada')
        selected_product.classList.add("produtoSelecionado")
        text.classList.add('texto_selecionado')
        comprar.classList.add('btn_compra')
        comprar.textContent = "COMPRAR"
        foto.style.backgroundImage = `url(${produto.imagem})`
        text.innerHTML = str
        sessao.appendChild(selected_product)
        selected_product.appendChild(foto)
        selected_product.appendChild(text)
        selected_product.appendChild(comprar)
    }
}

let div_produto = document.querySelectorAll('.produto_div')

div_produto.forEach((div) => {
    div.addEventListener('click', e => {
        let x = parseInt(div.id)
        let objeto = produtos[x]
        console.log(objeto)
        show_product(objeto)
        btn = document.querySelector('.btn_compra')
    })
})

comprar.addEventListener('click', e => {
    carrinho.push(objeto_selecionado)
    localStorage.setItem('carrinho', JSON.stringify(carrinho))
    qtd = carrinho.length
    window.location.href = "index.html"
})

