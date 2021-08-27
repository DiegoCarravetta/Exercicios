/*
Aula 09 - CodeLab - Estruturas de Repetição e Listas

01) Crie um programa onde o usuário possa digitar vários valores numéricos e cadastre-os em uma lista. Caso o número já esteja lá dentro, ele não será adicionado. No final, serão exibidos todos os valores únicos digitados, em ordem crescente.
*/

let quantidade1 = +prompt ("Olá usuário!\nNa sequência, iremos completar uma lista de números.\n\nPor favor, informe a quantidade de números que terão lista?\n\n");

let contador1 = 0

let lista1 = [];

while (contador1 < quantidade1) {
  
  let numero1 = +prompt ("Digite o número:");

  if (lista1.includes (numero1)) {
    break;
  }

  else {
    lista1.push (numero1);
  contador1 = contador1 + 1;
  }
}

console.log ();
console.log ("Você digitou, em ordem crescente e sem repetição a sequência: ");
console.log (lista1.sort());