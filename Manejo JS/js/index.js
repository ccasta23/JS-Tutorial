//Selectores JS

//Obtener un elemento por ID
//document.getElementById("div5").innerHTML = "Este es el DIV 5"

//Obtener un ARREGLO de elementos por su clase y guardarlo en una variable
let divs = document.getElementsByClassName("col")

//Recorrer el arreglo de elementos HTML obtenidos a través de su clase
for (let i = 0; i < divs.length; i++) {
    console.log("Contenido del div en pos " + i + ": " +
        divs[i].innerText)
    divs[i].style.backgroundColor = 'blue' //Cambiar propiedad CSS
    divs[i].style.color = 'white' //Cambiar propiedad CSS
}

//divs[7].innerHTML = divs[0].innerHTML

//Obtener un ARREGLO de elementos por su Tag Name y guardarlo en una variable
let tagh3 = document.getElementsByTagName("h3")

//obtener elementos del DOM
document.querySelector(".col") //Obtiene 1 Sólo (Incluso para clases)
document.querySelectorAll(".col") //Obtiene un arreglo de todos los elementos que coincidan con el selector CSS

//Cambiar el atributo SRC de mi imagen con id="miimagen"
document.getElementById("miimagen").src = "https://i.imgur.com/d39Q9Cc.jpg"

document.getElementById('div5').addEventListener("click", cambiarPerrito)

//Crear una función para cambiar el color a todas las columnas del HTML
function cambiarColorColumnas(color) {
    let columnas = document.getElementsByClassName("col")
    for (let i = 0; i < columnas.length; i++) {
        columnas[i].style.backgroundColor = color
    }
}

function onClickBTN8() {
    console.log("Hizo click en el DIV 8")
}

//Agregar evento a un elemnto HTML desde JS
document.getElementById("cambiarColor8").addEventListener("click", onClickBTN8)
    //Guardar un elemento del DOM en una variable
let div7 = document.getElementById("cambiarColor7")
    //Agregar una función anónima de JS
div7.addEventListener("click", function() {
    console.log("Agregué una función anónima")
    console.log("Click en el DIV 7")
})







async function cambiarPerrito() {
    let perrito = await httpCall('https://dog.ceo/api/breeds/image/random')
    document.getElementById("miimagen").src = perrito.message
}

async function httpCall(URL) {
    let peticion = await fetch(URL)
    let respuesta = await peticion.json()
    console.log(respuesta)
    return respuesta
}


// fetch("https://swapi.co/api/people/1").then(function(response){
// 	response.json().then(function(data){
// 		console.log(data)
// 	})
// })