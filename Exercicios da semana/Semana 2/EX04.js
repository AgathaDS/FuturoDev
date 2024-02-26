const numeros = [5, 3, 2, 7, 8];

const soma = numeros.reduce((acumulador, numeroAtual) => {
    return acumulador + numeroAtual
    }, 0)
    
    console. log("A soma dos números é ", soma)