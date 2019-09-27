//Llamados HTTP GET a la URL enviada por parámetro
// fetch("https://swapi.co/api/people/1/")
//     .then(function(response) {
//         console.log("Estuvo bien la petición :D  ")
//         console.log("Respuesta: ", response)
//         response.json().then(function(data) {
//             console.log(data)
//             document.getElementById("informacion").innerHTML = "<h1>" + data.name + "</h1>"
//         })
//     })
//     .catch(function() {
//         console.log("Algo salió mal :(  ")
//     })
/*

*/
//ECS6
async function obtenerPersonaje(id) {
    let response = await fetch(`https://swapi.co/api/people/${id}/`)
    let data = await response.json()
    return data
}

async function obtenerDatos(url) {
    let response = await fetch(url)
    let data = await response.json()
    return data
}

/**
 * Retorna una cadena HTML con una lista de personajes y un botón de anterior y siguiente si recibe las URL
 * @param {string} url API a ser ejecutada 
 */
async function listarPersonajes(url) {
    let lista = `<ul class="collection with-header">
      <li class="collection-header indigo lighten-2"><h4>Nombre de Personajes de StarWars (SWAPI)</h4></li>`
    let personajes = await obtenerDatos(url)
        //let arregloPersonajes = personajes.results //Forma 1 de recorrer el arreglo de resultados
        // for (let i = 0; i < arregloPersonajes.length; i++) {
        //     lista += `<li class="collection-item">
        //     <div>${arregloPersonajes[i].name}</div></li>`
        // }
    let numeroPersonaje = 1;
    for (const personaje of personajes.results) { //Forma 2 de recorrer el arreglo de resultados
        lista += `<li class="collection-item">
         <div><strong>${numeroPersonaje}. Nombre:</strong> ${personaje.name}. <strong>Género: </strong> ${personaje.gender}</div></li>`
        numeroPersonaje++
    }
    lista += '</ul><div class="row">'
    if (personajes.previous) { //Agregar un botón pata la página anterior
        lista += `<div class="col s6"><a id ="btn-anterior" 
                class="waves-effect waves-light btn red darken-2"
                data-url="${personajes.next}"><i class="material-icons left">skip_previous</i>Anterior</a></div>`
    }
    if (personajes.next) { //Agregar un botón pata la página siguiente
        lista += `<div class="col s6"><a id ="btn-siguiente" 
                class="waves-effect waves-light btn indigo"
                data-url="${personajes.next}"><i class="material-icons right">skip_next</i>Siguiente</a></div></div>`
    }
    return lista
}

async function main(url) {
    let lista = await listarPersonajes(url)
    document.getElementById("informacion").innerHTML = lista
    document.getElementById("btn-siguiente").addEventListener("click", function() {
        main(this.dataset.url)
    })
}

main('https://swapi.co/api/people/')