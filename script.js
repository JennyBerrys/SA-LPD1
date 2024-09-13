let num1 = Number(prompt("Ingresa el primer número:"));
let num2 = Number(prompt("Ingresa el segundo número:"));
let num3 = Number(prompt("Ingresa el tercer número:"));

if (num1 === num2 && num2 === num3) {
    console.log("Los números son iguales:", num1, num2, num3);
} else {
    let numeros = [num1, num2, num3];

    let ordenAscendente = [...numeros].sort((a, b) => a - b);
    console.log("Ordenados de menor a mayor:", ordenAscendente);

    let ordenDescendente = [...numeros].sort((a, b) => b - a);
    console.log("Ordenados de mayor a menor:", ordenDescendente);
}
