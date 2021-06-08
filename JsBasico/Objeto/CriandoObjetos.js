//usando a notação literal
//construindo um objeto literal
const obj1 = {}
console.log(obj1)

//construindo objeto com fnção construtora
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funções construtoras
function Produto(nome, preco) {
    this.nome = nome //significa que o atributo vai ser público
}

const p1 = new Produto('Caneta', 1.50)


//Função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 4144, 3)
const f2 = criarFuncionario('Lucas', 4554, 2)
console.log(f1.getSalario(), f2.getSalario())