let texto = "";
for(let i=1; i<=5; i++){
    // texto = texto + i + "<br>";
    texto += i + "<br>";
}
document.getElementById("demo").innerHTML = texto;


// "BMW","Volvo","Saab","Fiat","Audi"     cars-list

let carros= "";
let cars=["BMW","Volvo","Saab","Fiat","Audi"];
for(let c=0; c<cars.length; c++){
    carros = carros + "<li>"+ cars[c] + "</li>";
}
document.getElementById("cars-list").innerHTML = carros;

// gallery
let gallery="";
const imagenes=[
    "https://t1.ea.ltmcdn.com/es/posts/7/4/3/como_ayudar_a_un_gatito_a_defecar_20347_600.webp",
    "https://via.placeholder.com/150/FF0000/FFFFFF?text=Imagen+2",
    "https://via.placeholder.com/150/00FF00/000000?text=Imagen+3"
]
for(let i=0; i<imagenes.length; i++){
    gallery = gallery + "<img src='" + imagenes[i] + "' alt='Imagen"+(i+1)+"' >";
}

document.getElementById("gallery").innerHTML = gallery;