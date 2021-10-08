const materias = [{
    materia: "matematicas",
    nota: 5,
    ponderado: 30
},
{
    materia: "matematicas",
    nota: 4,
    ponderado: 30
},
{
    materia: "matematicas",
    nota: 5,
    ponderado: 40
}];

const resultadoPonderadoXnota = materias.map(function(valorA) {
    return valorA.nota * valorA.ponderado;
}
);
const resultadoSumatoriaPonderadoXnota = resultadoPonderadoXnota.reduce(function(sum=0, valorActual)
{
    return sum + valorActual;
})

const totalPonderado =  materias.map(function(valorA) {
    return valorA.ponderado;
}
).reduce(function(sum=0, valorActual)
{
    return sum + valorActual;
});

const promedio = resultadoSumatoriaPonderadoXnota / totalPonderado;
console.log(promedio);