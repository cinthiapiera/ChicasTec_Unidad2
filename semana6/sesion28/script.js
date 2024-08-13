//Hallar el área de una circunferencia. Área de un círculo = π r² 
function areaCircunferencia (r){
    const pi=3.14;
    re = pi * r * r;
    return re;
}

let radio = prompt("Ingresa el radio: ");
let resultado = areaCircunferencia(radio);
console.log(resultado);


let area = a => { return 3.14*a*a};
console.log(area(425));

/*crear un función que permita decirnos si aprobamos un curso o no luego de ingresar la nota.si una nota mayor a 10 significa que aprobaste un curso de lo contrario recomendar que estudie un poco más.*/

function evaluarNota(n){
    if(n>10){
        if(n<=20){
            return "Aprobaste"; //console.log("Aprobaste")
        }else{
            return "la nota no puede superar el 20"; //console.log("la nota no puede superar el 20")
        }
    }else{
        if(n<=10){
            if(n>=0){
                return "Necesitas estudiar más"; //console.log("Necesitas estudiar más")
            }
            else{
                return "la nota no puede ser negativo";//console.log("la nota no puede ser negativo")
            }
        }
    }
}

let nota = prompt("Ingrese la nota: ");
console.log(evaluarNota(nota));