//arrays//

const arrayDeNumeros = [0,1,2,3,4]
const arrayDeNombres = [Ailen,Mara,Suyai]

console.log(arrayDeNombres)


for (let index = 0;index<4;index++){

    if(arrayDeNombres[index] === "mara"){
        console.log("Encontramos a Mara"+(index+1));
        break 
    
    }
}

const listaNombres = [];
let   cantidad     = 5;

do{
    let nombreAIngresar = prompt('ingrese su nombre')
    listaNombres.push(nombreAIngresar)
    console.log(listaNombres.length)
}while(listaNombres.length != cantidad)

const nuevaLista = listaNombres.concat(["MARA", "AILEN"]);

alert(nuevaLista.join("/n"));

//funciones//

function sumarRango(desde,hasta){
}
let total1 = 0
for (let i = 1;i<=10;i++){
    total1 += i 
}
console.log(total1) //55

sumarRango(1,5)

function mayorQue(n) {
    return (m) => m > n 
}

let mayorQueDiez = mayorQue(10)

console.log( mayorQueDiez(12) ) // true
console.log( mayorQueDiez(8) )  // false


const productos = [
    {nombre:'abrigos',precio:1000},
    {nombre:'remeras',precio:700},
    {nombre:'pantalones',precio:1200}]

let total = 0 

productos.forEach(  (elemento)=> {
    total+= elemento.precio
    console.log(elemento,nombre,elemento.precio)
})

console.log(total)
