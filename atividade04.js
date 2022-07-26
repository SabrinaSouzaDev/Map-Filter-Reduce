const lista = [{
        name: 'test     1',
        value: 30,
    },

    {
        name: 'test 2',
        value: 40,
    },

    {
        name: 'test 3',
        value: 50,
    },

];

const saldo = 100;

function calcular(saldo, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log('rodada', index + 1)
        console.log({ prev: prev, current: current });
        console.log({ current: current });
        return prev - current.value;
    }, saldo);
}

console.log(calcular(saldo, lista));