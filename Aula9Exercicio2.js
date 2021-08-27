/*
Aula 09 - CodeLab - Estruturas de Repetição e Listas

02) Crie um programa que vai ler vários números e colocar em uma lista. Depois disso, crie duas listas extras que vão conter apenas os valores pares e os valores ímpares digitados, respectivamente. Ao final, mostre o conteúdo das três listas geradas.
*/

let quantidade1 = +prompt ("Olá usuário!\nNa sequência, iremos completar uma lista de números.\n\nPor favor, informe a quantidade de números que terão lista?\n\n");

let contador1 = 0

let lista1 = [];

let par1 = [];

let impar1 = [];

while (contador1 < quantidade1) {
  
  let numero1 = +prompt ("Digite o número:");

  if (lista1.includes (numero1)) {
    break;
  }

  else {
    lista1.push (numero1);
    contador1 = contador1 + 1;

    if (numero1 %2 !== 0) {
      impar1.push (numero1);
    }

    else {
      par1.push (numero1);
    }
  }
}

console.log ();
console.log ("Você digitou, em ordem crescente e sem repetição a sequência: ");
console.log (lista1.sort());

console.log ();
console.log ("Números pares que você digitou, em ordem crescente e sem repetição a sequência: ");
console.log (par1.sort());

console.log ();
console.log ("Números impares que você digitou, em ordem crescente e sem repetição a sequência: ");
console.log (impar1.sort());