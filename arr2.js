// Soma dos Elementos de um Array
// Escreva uma função que receba um array de números e retorne a soma de todos os elementos.

const arrNumber = [15, 7, 8, 10, 4, 9, 8, 8]

function sumArr (arr) {
    let sum = 0
    arr.forEach(element => {
        sum += element
    })
    return sum
}

console.log(sumArr(arrNumber))

// Encontrar o Maior Número em um Array
// Escreva uma função que receba um array de números e retorne o maior número.

function returnLargestNumber(arr) {
    let higherNumber = arr[0]

    for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element > higherNumber) {
        higherNumber = element
        } 
    }
    return higherNumber
}

console.log(returnLargestNumber(arrNumber))

// Inverter um Array
// Escreva uma função que receba um array e retorne um novo array com os elementos em ordem inversa.

function inverseArray(arr) {
    return arr.reverse()
}

console.log(inverseArray(arrNumber));

// Remover Duplicatas de um Array
// Escreva uma função que receba um array e retorne um novo array sem elementos duplicados.

function removeDuplicates(arr) {
    let arrDif = []
    arrNumber.forEach(element => {
    if (element !== arrDif[0]) {
        arrDif.push(element)
    } 
})
    return arrDif
}

console.log(removeDuplicates(arrNumber))

// Achar a Interseção de Dois Arrays
// Escreva uma função que receba dois arrays e retorne um novo array contendo apenas os elementos presentes em ambos os arrays.

const arr1 = [1, 3, "Miguel", "Reginaldo"];
const arr2 = ["Miguel", 4, 8, 1];



function elementsPresent(arr1, arr2) {
    const arr3 = []
    for (let index = 0; index < arr1.length; index++) {
        const element = arr1[index];
        for (let index2 = 0; index2 < arr2.length; index2++) {
            const element2 = arr2[index2];
            if (element === element2) {
                arr3.push(element)
            }
        }
    }
    return arr3
}
console.log(elementsPresent(arr1, arr2));

// Mover Zeros para o Fim do Array
// Escreva uma função que receba um array de números e mova todos os zeros para o fim do array, mantendo a ordem dos outros elementos.

const moveZero = [0, 0 , 1 , 4, 0, 8]

function moveZerosToEnd(arr) {
    const result = [];
    let zeroCount = 0;

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index]
        if (element === 0) {
            zeroCount++;
        } else {
            result.push(element);
        }
    }

    for (let index = 0; index < zeroCount; index++) {
        result.push(0);
    }

    return result;
}

console.log(moveZerosToEnd(moveZero))