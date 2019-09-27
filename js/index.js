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

async function listarPersonajes(url) {
    let lista = `<ul class="collection with-header">
      <li class="collection-header"><h4>Nombres de Personajes</h4></li>`
    let personajes = await obtenerDatos(url)
    let arregloPersonajes = personajes.results
    for (let i = 0; i < arregloPersonajes.length; i++) {
        lista += `<li class="collection-item">
        <div>${arregloPersonajes[i].name}</div></li>`
    }
    lista += '</ul>'
    if (personajes.next) {
        lista += `<a id ="btn-siguiente" 
                class="waves-effect waves-light btn"
                data-url="${personajes.next}">Siguiente</a>`
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