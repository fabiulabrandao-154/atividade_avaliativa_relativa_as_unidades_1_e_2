// objetivo de uma função = definir um bloco de código reutilizável
// function <nome> (<parametros>) {...}
function subtrair(x,y) // recebe dados como parâmetro
{
  let subtrair = x - y; // busquem declarar apenas LET nas functions
  return subtrair; // retornar a informação 
}
 // chamar a função
 
var print1 = subtrair(subtrair(4,7),3); console.log(print1);
var print2 = subtrair(10,subtrair(print1,5)); console.log(print2);
console.log(subtrair(print1,print2));

function multiplicar(x,y) // recebe dados como parâmetro
{
  let multiplicar = x * y; // busquem declarar apenas LET nas functions
  return multiplicar; // retornar a informação 
}
 // chamar a função
 
var print1 = multiplicar(multiplicar(4,7),3); console.log(print1);

function dividir(x,y) // recebe dados como parâmetro
{
  let dividir = x / y; // busquem declarar apenas LET nas functions
  return dividir; // retornar a informação 
}
 // chamar a função
 
var print1 = dividir(dividir(4,7),3); console.log(print1);
var print2 = dividir(10, dividir(print1,5)); console.log(print2);
console.log(dividir(print1,print2));