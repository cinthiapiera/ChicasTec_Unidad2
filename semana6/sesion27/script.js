//do-while
let i = 0;
do {
  i = i + 1;
  console.log(i);
} while (i < 5);

//USO DE FUNCIONES: console.log(), alert() , promp()
let respuesta = prompt("Ingresa tu edad: ");
document.getElementById("mensaje").innerHTML=respuesta;
alert("no ingreses mas datos");

//EXPRESIONES REGULARES
/*
/hola/
/hola[0-9]mundo/
/hola[0-9]mundo/
/hola[0-9]+mundo/
/^hola$/
/^[0-9]+$/}
*/
const patron=/^01\d{9}$/; //01987654321
let dato;
do{
    dato= prompt("Ingresa tu teléfono:");
}while(!patron.test(dato));

/*-------------FUNCIONES--------------*/

//suma, resta, producto y división:
/*
function suma(a, b) {
  resultado = a+b
  return resultado;  
}

let respuesta = suma(1,7);
alert(respuesta);
*/

/*
function resta(a, b) {
  r= a-b
  return r;  
}

let dato = resta(6,2);
alert(dato);
*/

/*
function producto(a, b) {
  r= a*b
  return r;  
}

let res = producto(6,2);
alert(res);
*/

/*
function division(a, b) {
  r= a/b
  return r;  
}

let valor = division(5,3);
alert(valor); //resaltar que esto es lo mismo que decir: alert(division(5,3));
*/

// ECMAScript 6
//----Función flecha: mismo resultado otra forma de hacer. Una forma más "moderna" de hacer

let agregar = a => a + 100;
alert(agregar(2));

let resta = (a,b) => a-b;
alert(resta(9,5));

const add = (x, y) => { return x + y };
console.log(add(3, 7));





