/*1 Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.*/

const pares =[2,4,6,8,10,12,14,16,18,20];
const impares = pares.map(num => num -= 1);
console.log(impares);

/*2 Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.
*/

const nomes = ['Felipe', 'João', 'Maria', 'Marta', 'Marluci', 'Ana', 'Maria'];
const filtro = nomes.filter(nome => nome == 'Maria');
console.log(filtro);

/*3 Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
*/

const numeros =[2,4,6,8,10,12,14,16,18,20];
const formatados = numeros.reduce((acumulador, num) => `${acumulador} - ${num}`);
console.log(formatados);

/*4 Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.
*/

const animais = ['Elefante', 'Gato', 'Arara', 'Coala'];
const lista = animais.forEach(animal => console.log(`O animal é ${animal}`));
console.log(lista);