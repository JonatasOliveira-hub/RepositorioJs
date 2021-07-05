//Arrays em JS são objetos ao invés de estruturas, porém devem ser tradados iguais ao padrão OO
let aprovados = new Array ('Bia', 'Marcos', 'ksao')  //Forma não usual de declarar array
console.log(aprovados)

aprovados = ['Bia', 'Marcos', 'ksao']  //Forma usual de declarar array
aprovados.push('Jônatas') //Adicionar novo elemento na ultima posição do array
console.log(aprovados)

aprovados[5] = 'Joao'
console.log(aprovados)  //O intervalo entre um endereço do array existe, mas está undefined

console.log(aprovados.length) //tamanho
console.log(aprovados[4]===undefined) //true

aprovados.sort() //método de ordenação. Altera o array original, o ideal é clonar e alterar o clone
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1]) //excluindo

aprovados.splice(1, 1, 'Novo Nome') //primeiro parametro é o indice que vou trabalhar. O segundo parametro é a quantidade de elementos. O terceiro é pra adicionar novos.
console.log(aprovados)


