// Extrae los números pares e impares del array números
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let pares = [];
let impares = [];

for (i = 0; i <= numeros.length; i++) {
    if (i % 2 === 0) {
        pares.push(i);
    } else {
        impares.push(i)
    }
};

console.log(`Los números pares son ${pares}`);
console.log(`Los números impares son ${impares}`);