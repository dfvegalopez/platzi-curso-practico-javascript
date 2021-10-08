const lista1 = [
    100,
    200,
    300,
    500
]

calcularMediaAritmetica(lista1);

function calcularMediaAritmetica(lista)
{
    /*let sumaLista = 0;
    for (let index = 0; index < lista.length; index++) {
        sumaLista += lista[index];    
    }*/
    const sumaLista = lista.reduce(function(valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    });
    let promedioLista = sumaLista / lista.length;
    return promedioLista;
}