const sequencia = {
    _valor: 1, //conveção para os desenvolvedores saberem que é uma variável com get e set.
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)