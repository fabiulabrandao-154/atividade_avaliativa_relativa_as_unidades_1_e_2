var x = 6; // variável global
console.log(x);
{ // inicio do bloco
 var y = 5; //global
 x = 11;
 let w = 8; // local ao bloco
 console.log(w);
} // fim do bloco
console.log(y);
const z = 10; // imutável
console.log(x);
console.log(z);