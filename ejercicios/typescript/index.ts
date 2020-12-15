console.log("Hola, typescript");

function add(a: number, b: number) {
  return a + b;
}

const sum = add(3, 2);

//enum: Los valores con este tipo definimos un tipos mas descriptivo para un
//conjunto de variables.

//Tipo string
let nombre: string = "Josué";

//Booleanos
let salirDeLaU: boolean = true;
// salirDeLaU = false;

//Tipo number
let age: number = 20;

//Arreglo de string
let materias: string[] = [];
materias.push("Base de datos");

//Array de varios tipos

let stringAndNumbers: Array<string | number> = [];
stringAndNumbers.push("Hola");
stringAndNumbers.push(20);

//No sabemos que valor será

let cualquierValor: any = "Joker";
cualquierValor = { type: "Español" };

enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul",
}

let favoriteColor: Color = Color.Azul;
console.log(`My favorite color is : ${favoriteColor}`);

let person: object = { nombre: "David", age: 20 };
console.log(person);
