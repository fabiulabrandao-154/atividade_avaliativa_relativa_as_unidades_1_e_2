let frutas = ["maçã", "banana", "laranja", "uva", "melancia"];

console.log("FOR:");
for (let x = 0; x < frutas.length; x++) {
  console.log(frutas[x]);
}

console.log("WHILE:");
let j = 0;
while (j < frutas.length) {
  console.log(`${frutas[j]} na posição: ${j}`);
  j++;
}

console.log("DO...WHILE:");
j = 0; // reaproveitando a variável j
do {
  console.log(`${frutas[j]} na posição: ${j}`);
  j++;
} while (j < frutas.length);

console.log("FOR...OF:");
for (let fruta of frutas) {
  console.log(`${fruta}`);
}