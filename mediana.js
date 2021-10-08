const lista1 = [100,200,150,500,40000000];
calcularMediana(lista1);
function calcularMediana(listaNumeros)
{
    let mediana
    listaNumeros.sort();
    const mitadLista = parseInt(listaNumeros.length / 2);
    if (isPar(listaNumeros.length))
    {
        const lista = [listaNumeros[mitadLista], listaNumeros[mitadLista - 1]];
        mediana = calcularMediaAritmetica(lista);
    } else {
        mediana = lista1[mitadLista];
    }
    return mediana;
}

function isPar(numero)
{
    if (numero % 2 === 0)
    {
        return true;
    } else {
        return false;
    }
}

function calcularMediaAritmetica(lista)
{
    const sumaLista = lista.reduce(function(valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    });
    let promedioLista = sumaLista / lista.length;
    return promedioLista;
}