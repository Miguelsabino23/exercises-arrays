// Rotacionar um Array
// Escreva uma função que receba um array e um número que representará a quantidade de vezes em que a array irá rotacionar, e rotacione o array para a direita a quantidade de vezes que for necessária caso o número seja positivo, caso seja negativo rotacione para a esquerda.

const exerciseArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function rotateArray(arr, number) {
  if (number < 0) {
    number = Math.abs(number);
    return arr.slice(number).concat(arr.slice(0, number));
  } else {
    return arr.slice(-number).concat(arr.slice(0, -number));
  }
}

console.log(rotateArray(exerciseArr, 6));

// Verificar se Dois Arrays são Iguais
// Escreva uma função que receba dois arrays e verifique se são iguais (têm os mesmos elementos na mesma ordem).

const arr1 = ["Miguel", "Ana", "Kamylla", "Miguel"];
const arr2 = ["Miguel", "Ana", "Kamylla", "Miguel"];

function equalArrays(arr1, arr2) {
  return arr1.toString().includes(arr2.toString());
}

console.log(equalArrays(arr1, arr2));

// Encontrar o Elemento que Mais se Repete em um Array
// Escreva uma função que receba um array e retorne o elemento que mais se repete. Se houver empate, retorne qualquer um dos elementos.

function repeatedElements(arr) {
  const count = {};

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (count[element]) {
      count[element]++;
    } else {
      count[element] = 1;
    }
  }

  let maxCount = 0;
  let elementRepeat = null;

  for (let element in count) {
    if (count[element] > maxCount) {
      maxCount = count[element];
      elementRepeat = element;
    }
  }

  return elementRepeat;
}

console.log(repeatedElements(arr1));

// Contar Ocorrências de Elementos em um Array
// Escreva uma função que receba um array e retorne um objeto onde as chaves são os elementos do array e os valores são o número de ocorrências desses elementos.

function countOccurrenceOfElements(arr) {
  let count = {};

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    if (count[element]) {
      count[element]++;
    } else {
      count[element] = 1;
    }
  }

  return count;
}

console.log(countOccurrenceOfElements(arr1));

// Remover Elementos Falsos de um Array
// Escreva uma função que receba um array e remova todos os valores considerados falsy.

const arrBoolean = [
  false,
  true,
  false,
  false,
  false,
  true,
  0,
  "",
  null,
  undefined,
  NaN,
  2,
  "Miguel",
];

function removeArrFalse(arr) {
  const falsy = arr.filter((element) => {
    if (
      element !== false ||
      element !== 0 ||
      element !== "" ||
      element !== null ||
      element !== undefined ||
      element ||
      NaN
    ) {
      return element;
    }
  });

  return falsy;
}

console.log(removeArrFalse(arrBoolean));

// Transformar um Array de Strings
// Escreva uma função que receba um array de strings e retorne um novo array onde cada string será transformada em maiúsculas, caso a string tenha maior ocorrência de consoantes, e minúsculas caso a string tenha maior ocorrência de vogais.

const arrString = ["Miguel", "Sabino", "Ana", "Kamylla"];

function countVowelsAndConsonants(str) {
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;
  let consonantCount = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
    } else if (char.match(/[a-zA-Z]/)) {
      consonantCount++;
    }
  }

  return { vowelCount, consonantCount };
}

function transformArrString(arr) {
  const transformedArray = [];

  for (let str of arr) {
    const { vowelCount, consonantCount } = countVowelsAndConsonants(str);

    if (consonantCount > vowelCount) {
      transformedArray.push(str.toUpperCase());
    } else {
      transformedArray.push(str.toLowerCase());
    }
  }

  return transformedArray;
}

console.log(transformArrString(arrString));
