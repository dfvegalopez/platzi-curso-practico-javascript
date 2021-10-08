const lista1 = [
    1,2,3,1,2,3,4,5,1,6,7,9,1,1,2,3,4
]

const list1Count = {};

lista1.map(
    function(elemento){
        if (list1Count[elemento])
        {
            list1Count[elemento] += 1;
        } else {
            list1Count[elemento] = 1;
        }
    }
);
const lista1Array = Object.entries(list1Count).sort(function(valorAcumulado, nuevoValor){
    return valorAcumulado[1] - nuevoValor[1];
});
const moda = lista1Array[lista1Array.length -1];