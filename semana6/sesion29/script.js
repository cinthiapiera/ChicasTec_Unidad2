import {saludar, notificacion} from "./modulo.js";
import {suma} from "./operacion.js";

console.log(saludar("futuras de desarrolladoras"));

alert(notificacion("No hay nada que mostrar"));

let dato1=parseInt(prompt("ingrese el valor de a:"));
let dato2=parseInt(prompt("ingrese el valor de b:"));
let resultado = suma(dato1,dato2);

document.getElementById("operador").innerHTML = resultado;
