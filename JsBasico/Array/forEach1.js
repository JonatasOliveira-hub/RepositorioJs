aprovados = ['Ana','Bia','Marcos', 'Polo']

aprovados.forEach(function (nome, indice) { //Parece estranho que ele tenha colocado variaveis nome e indice. Não são nativas não. Elas representam a assinatura do método forEach.
    console.log(`${indice + 1}, ${nome}`)
})

//Posso passar funções inline para o forEach, como no exemplo acima.
//Posso armazenar a função em uma variável, e passar a variável para o forEach.

const exibirAprovados = aprovados => console.log(aprovados) //armazenei a função aprovados(arrow) na variável exibirAprovados 
aprovados.forEach(exibirAprovados)