// Arrays

let numeros = [10, 20, 30];

// Acessando os elementos
console.log("Primeiro Elemento: ", numeros[0]);
console.log("Segundo Elemento: ", numeros[1]);
console.log("Terceiro Elemento: ", numeros[2]);

// Adicionando elementos
numeros.push(40); // Adiciona no final do array
numeros.unshift(5); // Adiciona no inicio do array
console.log("Array após adições: ", numeros);

// Removendo elementos
numeros.pop(); // Remove o último valor
numeros.shift(); // Remove o primeiro valor
console.log("Array após remoções: ", numeros);