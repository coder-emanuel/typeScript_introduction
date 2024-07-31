
// Conceptos de Programación en TypeScript

// 1. Variables y constantes: Tipos, Tipos personalizados
type producto = {
    id: number;
    name: string;
    price: number;
};

let productoEjemplo: producto = {
    id: 1,
    name: "Julian",
    price: 1200
};

console.log(productoEjemplo);

// 2. Operadores (aritméticos, booleanos)
function par(numero: number): boolean {
    return numero % 2 === 0;
}

console.log(par(4));
console.log(par(5));
console.log(par(10));

// 3. Estructuras de decisión (if, switch, ternarios)
function clasificarNumero(numero: number): void {
    if (numero > 0) {
        console.log("El número es positivo");

    } else if (numero < 0) {
        console.log("El número es negativo");

    } else {
        console.log("El número es cero")
    }

    // Utilizando switch 
    switch (true) {
        case (numero > 0):
            console.log("El número es positivo");
            break;

        case (numero < 0):
            console.log("El número es negativo");
            break;

        default:
            console.log("El número es cero");
            break;
    }
}

// Ejemplos de uso
clasificarNumero(10);
clasificarNumero(-4);
clasificarNumero(0);

// 4. Estructuras de iteración (while, for, foreach, map)
function Printnames(names: string[]): void {
    names.forEach(name => {
        console.log(name)
    });
}

let namesArray: string[] = ["Andres", "Camila", "David", "Salome"];
Printnames(namesArray);


// Estructuras de Datos y Funciones
// 1. Arrays | Listas

//Tarea 1: Crea un array de números y calcula la suma de todos sus elementos utilizando un metodo reduce.
let numbers: number[] = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(`La suma de los números es: ${sum}`);

// Tarea 2: Implementa una función que reciba un array de strings y retorne la concatenación de todos los elementos.
function concatenateStrings(strings: string[]): string {
    return strings.reduce((acc, curr) => acc + curr, "");
}

let words: string[] = ["Hello", " ", "world", "!"];
let concatenateString = concatenateStrings(words);

console.log(concatenateString);

// Tarea 3: Define un array de objetos User con propiedades id y name, e imprime el nombre de cada usuario en consola.
type User = {
    id: number;
    name: string;
}

let users: User[] = [
    { id: 1, name: "Roberto" },
    { id: 2, name: "Luisa" },
    { id: 3, name: "Carlos" }
];

users.forEach(user => {
    console.log(user.name)
});

// Tarea 4: Implementa una función que reciba un array de números y retorne el mayor valor.
function findMaxValue(numbers: number[]): number {
    return numbers.reduce((max, curr) => (curr > max ? curr : max), numbers[0]);
}

let numberArray: number[] = [10, 20, 40, 50, 5];
let maxValue = findMaxValue(numberArray);

console.log(`El mayor valor es: ${maxValue}`);


// 2. Objetos
// Tarea: Define un objeto Car con propiedades marca, modelo y año. Crea una instancia de Car e imprime sus propiedades en consola.
interface Car {
    marca: string;
    modelo: string;
    año: number;
}

let car: Car = { marca: "Toyota", modelo: "Corolla", año: 2020 };
console.log(`Marca: ${car.marca}, Modelo: ${car.modelo}, Año: ${car.año}`)

// Tarea 2: Con base en el objeto Car, crea una clase que posea un metodo estatico que reciba un objeto Car y retorne un string con la información del carro.
class CarInfo {
    static getCarInfo (car: Car): string {
        return `Marca: ${car.marca} Modelo: ${car.modelo} Año: ${car.año}`;
    }
}

let carDetails = CarInfo.getCarInfo(car);
console.log(carDetails);

// Tarea 3: Implementa una función que reciba un objeto Car y retorne un nuevo objeto con las mismas propiedades, pero con el año incrementado en 1.
function incremetCarYear (car: Car): Car {
    return {...car, año: car.año + 1};
}

let updateCar = incremetCarYear(car);
console.log(`Marca: ${updateCar.marca}, Modelo: ${updateCar.modelo}, Año: ${updateCar.año}`);


// 3. Funciones
// Tarea: Implementa una función que reciba un array de números y retorne el mayor valor.
function MaxValue(numbers: number[]): number {
    return Math.max(...numbers);
}

let arrayNumbers = [20, 40, 50, 60, 3];
console.log(MaxValue(arrayNumbers));

// Tarea 2: Implementa una funcion que reciba rest parameters y retorne error si almenos uno de los parametros pasados no es del tipo de los dos primeros parametros. Asegurarse que los dos primeros parametros sean del mismo tipo.
function checkTypes(...args: (number | string)[]): void {
    if (typeof args[0] !== typeof args[1]) {
      throw new Error("Los dos primeros parámetros deben ser del mismo tipo.");
    }
  
    const expectedType = typeof args[0];
    for (let i = 2; i < args.length; i++) {
      if (typeof args[i] !== expectedType) {
        throw new Error(`El parámetro en la posición ${i + 1} no es del tipo esperado (${expectedType}).`);
      }
    }
  }
  
  // Ejemplo de uso
  try {
    checkTypes(1, 2, 3, 4); // Sin error
    checkTypes("a", "b", "c", "d"); // Sin error
    checkTypes(1, 2, "3", 4); // Lanza un error
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.error("Error inesperado");
    }
  }
  
// Tarea 3: Define una funcion que reciba una matriz cuadrada de numeros como parametros y devuelva la matriz gira 90 grados en sentido horario.
function rotateMatrix(matrix: number[][]): number[][] {
    const n = matrix.length;
    let rotateMatrix: number[][] = Array.from({ length: n}, () => Array(n).fill(0));
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            rotateMatrix[j][n - 1 - i] = matrix[i][j];
        }
    }

    return rotateMatrix;

}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(rotateMatrix(matrix));