/* Funcion iniciarJuego */
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')

/* Funcion seleccionar mascota jugador */
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spawnMascotaJugador = document.getElementById('mascota-jugador')

/* Funcion seleccionar mascota enemigo*/
const spawnMascotaEnemigo = document.getElementById('mascota-enemigo')

/* Funcion combate */
const spawVidasJugador = document.getElementById('vidas-jugador')
const spawVidasEnemigo = document.getElementById('vidas-enemigo')

/* Funcion crearMensaje */
const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')

/* Funcion crearMensajeFinal */
/* let sectionMensajes = document.getElementById('resultado') */
/* let botonFuego = document.getElementById('boton-fuego') */
 /* let botonAgua = document.getElementById('boton-agua') */
 /* let botonTierra = document.getElementById('boton-tierra') */
 /* let sectionReiniciar = document.getElementById('reiniciar') */


class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let pomelo = new Mokepon('Pomelo', './assets/mokepons_mokepon_hipodoge_attack.png', 5)

let achuras = new Mokepon('Achuras', './assets/mokepons_mokepon_capipepo_attack.png', 5)

let ratatoile = new Mokepon('Ratatoile', './assets/mokepons_mokepon_ratigueya_attack.png', 5)

//Empujo informacion al arreglo "ataques"
pomelo.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' }
)

achuras.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
)

ratatoile.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-fuego' },
)



let mokepones = []
let ataqueJugador
let ataqueEnemigo
let inputPomelo 
let inputAchuras
let inputRatatoile
let opcionDeMokepones
let vidasJugador = 3
let vidasEnemigo = 3

//En el metodo "push" lo que este adentro, lo va a "empujar" al arreglo y lo va a guardar
/* mokepones.push(pomelo,achuras,ratatoile) */

mokepones.push(pomelo, achuras, ratatoile)


function iniciarJuego() {
    /* En una variable "opcionDeMokepones" encapsulo etiqueta HTML, luego reemplazo los nombres anteriores
    por las propiedades de dicho objeto*/
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>    
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones

     inputPomelo = document.getElementById('Pomelo')
     inputAchuras = document.getElementById('Achuras')
     inputRatatoile = document.getElementById('Ratatoile')

    })

    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

   
    sectionSeleccionarAtaque.style.display = 'none'

    sectionReiniciar.style.display = 'none'

    
    botonFuego.addEventListener('click', ataqueFuego)
   
    botonAgua.addEventListener('click', ataqueAgua)
   
    botonTierra.addEventListener('click', ataqueTierra)

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {

    
    sectionSeleccionarMascota.style.display = 'none'

    sectionSeleccionarAtaque.style.display = 'flex'


    if (inputPomelo.checked) {
       /*  Borro informacion escrita a mano para utilizar la informacion proveniente
        de nuetros objetos */
        spawnMascotaJugador.innerHTML = inputPomelo.id

    } else if (inputAchuras.checked) {
        spawnMascotaJugador.innerHTML = inputAchuras.id

    } else if (inputRatatoile.checked) {
        spawnMascotaJugador.innerHTML = inputRatatoile.id

    } else {
        alert('SELECCIONA UNA MASCOTA:')
    }

    /*  alert("SELECCIONASTE A: " + mascota) */

    seleccionarMascotaEnemigo()


}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1, 3)

    if (mascotaAleatoria == 1) {
        spawnMascotaEnemigo.innerHTML = 'Pomelo'
    } else if (mascotaAleatoria == 2) {
        spawnMascotaEnemigo.innerHTML = 'Achuras'
    } else if (mascotaAleatoria == 3) {
        spawnMascotaEnemigo.innerHTML = 'Ratatoile'
    }
}


function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    /* console.log(ataqueEnemigo)
    console.log(ataqueAleatorio) */

    combate()

}

function combate() {

    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje("EMPATE")
    } else if (ataqueJugador == 'FUEGO' && ataqueJugador == 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spawVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'AGUA' && ataqueJugador == 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spawVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador = 'TIERRA' && ataqueJugador == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spawVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spawVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal('FELICITACIONES! Ganaste ✨🎉!')
    } else if (vidasJugador == 0) {
        crearMensajeFinal('Lo siento, Perdiste 😢')
    }
}


function crearMensaje(resultado) {

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo


    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}




function crearMensajeFinal(resultadoFinal) {
    let parrafo = document.createElement('p')

    sectionMensajes.innerHTML = resultadoFinal


    botonFuego.disabled = true
   
    botonAgua.disabled = true
    
    botonTierra.disabled = true

    
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)