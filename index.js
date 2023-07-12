 // EJERCICIO 1 PAR O IMPAR//

 let numero = 28;
 function paridad(numero) {
   if (numero % 2 === 0) {
     console.log('El número ' + numero + ' es Par.');
   } else {
     console.log('El número ' + numero + ' es Impar.' );
   }
 }
 paridad(numero);

// EJERCICIO 2 MAYOR O MENOR//

 let numero1 = 38;
 let numero2 = 38;

 function mayorMenor(numero1 , numero2) {
   if (numero1 > numero2) {
     console.log('El número ' + numero1 + ' es mayor a ' + numero2);
   } else if (numero2 > numero1)
     console.log('El número ' + numero2 + ' es mayor a ' + numero1);
    if (numero1 == numero2)
     console.log('Los números ' + (numero1 +' y '+ numero2)+ ' son iguales, by Chiqui Tapia ');
   }
 mayorMenor(numero1 , numero2);

// EJERCICIO 3 MULTIPLO DE 5//

 let multiplo = 26;

 function multiploDe5(multiplo) {
   if (multiplo > 0 && multiplo % 5 == 0) {
    console.log( multiplo + ' es múltiplo de 5');
   } else {
     console.log( multiplo + " no es múltiplo de 5");
   } 
}
 multiploDe5(multiplo);


// EJERCICIO 4 IMPRIMIR NUMEROS DESDE EL 0//

 let inicio = 0;
 let fin = 12;
 function iterar (inicio, fin) {
  while (inicio <= fin) {
    console.log(inicio);
    inicio++;
  }
}
 iterar(inicio, fin);

// EJERCICIO 5 IMPRIMIR NUMEROS Y PALABRA//


 let inicio1 = 0;
 let palabra = 'Nucba';
 let repetir = 10;
function iterar1 (palabra, repetir, inicio1) {
  while (inicio1 < repetir) {
    console.log(palabra);
    inicio1++;
  }
}
iterar1(palabra, repetir, inicio1);


// EJERCICIO 6 ARRAY

 let frutas = ['Manzana', 'Banana', 'Pera', 'Sandia'];
 function array(frutas) {
  console.log(frutas);
}
 array(frutas);


