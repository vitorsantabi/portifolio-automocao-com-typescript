type Produto = {'produto':string, 'preco':number}

let Computador:Produto = {produto: 'DellWorkStation', preco:4500}
let Notebook:Produto = { produto: 'Galaxybook6',preco:6000}

function verificarValor(menor: Produto): void {
  menor.preco <= 5000
    ? console.log(`${menor.produto} está dentro do orçamento. ✅`)
    : console.log(`${menor.produto} está acima do orçamento. ❌`)
}

verificarValor(Computador)
verificarValor(Notebook)