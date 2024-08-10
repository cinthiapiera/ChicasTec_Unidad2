// let number = 2;
// while(number <=100){
//     console.log(number);
//     number = number +2;
// }

// for (let number = 1; number <= 100; number++) {
//     if (number % 2 === 0) {
//         console.log(number);
//     }
// }

//RETOS DE CÓDIGO
//Calcula la potencia de 2 elevado a un número específico.
let n=10;
let r=1;
let i=1;
while(i<=n){
    r = r * 2;
    i = i + 1;
}
console.log(r);

//Usar estructuras de control para invertir un arreglo de números. Como entrada recibirás un arreglo de números u objetos y como salida se espera un arreglo con el orden invertido de los elementos.[1, 2, 3, 4] -> [4, 3, 2, 1]
let array =[8,2,9,6,11,8,4,2]
console.log(array);

let nuevoarray=[];
for(let i=array.length-1; i>=0; i--){
        nuevoarray.push(array[i])
}
console.log(nuevoarray);

//Crea un programa que cuente el número de vocales de un string.
let cadena="abecedario";
let contador=0;
for(let i=0; i<=cadena.length; i++){
    if(cadena[i]==="a" || cadena[i]==="e" ||  cadena[i]==="i" || cadena[i]==="o" || cadena[i]==="u" ){
        contador=contador+1; //2
    }
}
console.log(contador);

//Crea un programa que compruebe si un número es par o impar.
let numero=17;
if(numero%2==0){
    console.log("es par");
}else{
    console.log("es impar");    
}

//Implementa un programa que determine si un número es mayor a otro.
let A = 5;
let B = 15;
let C = 10;

// if (A > B && A > C) {
//     console.log("A es el mayor");
// } else if (B > A && B > C) {
//     console.log("B es el mayor");
// } else {
//     console.log("C es el mayor");
// }

let mayor=A;
if (B > mayor) {
    mayor=B;
}
if (C > mayor) {
    mayor=C;
}
console.log(mayor);

//Crea un programa que determine si un número es primo. En matemáticas, un número primo es un número natural mayor que 1 que tiene únicamente dos divisores distintos: él mismo y el 1.
let x=8;
let cont=0;
let j=1;
while(j<=x){
    if(x%j==0){
        cont=cont+1;
    }
    j=j+1;
}
if(cont == 2){
    console.log("Es primo");
}else{
    console.log("No es primo");
}

//Crea un programa que determine si una persona puede manejar (16 años o más) y votar (18 años o más).
let edad = 17;
if (edad >= 18) {
    console.log("puede manejar y votar");
} else if (edad >= 16) {
    console.log("puede manejar");
} else {
    console.log("no puede manejar ni votar")
}

//Implementa un programa que determine si dos número son pares.
let num1 = 15;
let num2 = 18;
if(num1%2==0){
    if(num2%2==0){
        console.log("ambos son pares");
    }else{
        console.log("solo uno es par");
    }
}else{
    console.log("ninguno es par");
}