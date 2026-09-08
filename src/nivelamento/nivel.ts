let idade:number
const nome = "Vitor"
// quando quero especificar uma tipagem de dados ( conjunto )
type usuario = {'nick':string, 'age':number}

let jogador:usuario = {nick: 'Vitor', age:17}
let jogadorVelho:usuario = {nick: 'Zé', age:32}

function verificarIdade(userioAtual:usuario){
    if(userioAtual.age>=21){
        console.log(`✅Acesso liberado : o jogar ${userioAtual.nick} tem ${userioAtual.age}`)
    } else {
        console.log(`❌ Ei ${userioAtual.nick} É menor po n pode ${userioAtual.age} just a kid` )
    }
}
verificarIdade(jogador);
verificarIdade(jogadorVelho);

