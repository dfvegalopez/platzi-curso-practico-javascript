//Código del cuadrado
//console.group("Cuadrado");
function perimetroCuadrado(lado) { 
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}
//console.groupEnd("Cuadrado");
//Código del triangulo
//console.group("Triangulo");
function perimetroTriangulo(lado1, lado2, base) {
    return parseInt(lado1) + parseInt(lado2) + parseInt(base);
}
function areaTriangulo(base, altura)
{
    return (base * altura) / 2;
}
//console.groupEnd("Triangulo");
//Código del circulo
//console.group("Circulo");
function diametroCirculo(radio)
{
    return radio * 2;
}
function perimetroCirculo(radio)
{
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}
function areaCirculo(radio) 
{
    return (radio * radio) * Math.PI;
}
console.groupEnd("Circulo");


//Aca se interactua con HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const inputLadoUno = document.getElementById("InputLadoUno");
    const inputLadoDos = document.getElementById("InputLadoDos");
    const inputBase = document.getElementById("InputBase");
    const valueLadoUno = inputLadoUno.value;
    const valueLadoDos = inputLadoDos.value;
    const valueBase = inputBase.value;
    const perimetro = perimetroTriangulo(valueLadoUno, valueLadoDos, valueBase);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const inputAltura = document.getElementById("InputLadoDos");
    const inputBase = document.getElementById("InputBase");
    const valueAltura = inputAltura.value;
    const valueBase = inputBase.value;
    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}

function calcularPerimetroCirculo(){
    const inputRadio = document.getElementById("InputRadio");
    const valueRadio = inputRadio.value;
    const perimetro = perimetroCirculo(parseInt(valueRadio));
    alert(perimetro);
}

function calcularAreaCirculo(){
    const inputRadio = document.getElementById("InputRadio");
    const valueRadio = inputRadio.value;
    const area = areaCuadrado(valueRadio);
    alert(area);
}

function calcularAlturaTrianguloIsosceles(){
    const inputLadoUno = document.getElementById("InputLadoUnoIsosceles");
    const inputLadoDos = document.getElementById("InputLadoDosIsosceles");
    const inputLadoBase = document.getElementById("InputLadoBaseIsosceles");
    const valueLadoUno = inputLadoUno.value;
    const valueLadoDos = inputLadoDos.value;
    const valueLadoBase = inputLadoBase.value;
    const altura = alturaTrianguloIscosceles(valueLadoUno, valueLadoDos, valueLadoBase);
    alert(altura);
}

function alturaTrianguloIscosceles(ladoUno, ladoDos, ladoBase)
{
    if (isTrianguloIsosceles(ladoUno, ladoDos))
    {
        return Math.sqrt((ladoUno * ladoUno) - ((ladoBase * ladoBase) / 4));
    } else {
        return "El triangulo no cumple con las necesidades!!!";
    }
}

function isTrianguloIsosceles(ladoUno, ladoDos)
{
    if (ladoUno === ladoDos)
        return true;
    else 
        return false;
}
