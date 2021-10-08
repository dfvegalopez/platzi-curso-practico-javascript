//Funciones HELPER
function isPar(numero)
{
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista)
{
    const sumaLista = lista.reduce(function(valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    });
    let promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//calculadora de mediana
function medianaSalarios(lista)
{
    let mitad = parseInt(lista.length / 2);
    if (isPar(lista.length))
    {
        const personitaMitadUno = lista[mitad-1];
        const personitaMitadDos = lista[mitad];
        mediana = calcularMediaAritmetica([personitaMitadUno, personitaMitadDos]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}
//Mediana General
const salariosCol = colombia.map (
    function (personita) {
        return personita.salary;
    }
)
console.log("-------------salariosCol------------");
console.log(salariosCol);
console.log("-------------FinsalariosCol---------");
const salariosColSort = salariosCol.sort(function(salaryA, salaryB) {
    return salaryA - salaryB;
});
console.log("-------------salariosColSort------------");
console.log(salariosColSort);
console.log("-------------FinsalariosColSort---------");
const medianaSalariosCol = medianaSalarios(salariosColSort)
//Mediana Top 10%
const spliceStart = parseInt(salariosColSort.length * (90/ 100));
const spliceCount = salariosColSort.length - spliceStart;
const salariosTop10Col = salariosColSort.splice(spliceStart,spliceCount);
const medianaSalariosTop10 = medianaSalarios(salariosTop10Col);
console.log({medianaSalariosCol, medianaSalariosTop10});

