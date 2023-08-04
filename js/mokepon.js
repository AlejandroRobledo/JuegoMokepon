/* Funcion iniciarJuego */
const sectionSeleccionarAtaque = document.getElementById ('seleccionar-ataque')
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

let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre ,foto ,vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
    }
}

let pomelo = new Mokepon ('Pomelo','./assets/mokepons_mokepon_hipodoge_attack.png',5)

let achuras = new Mokepon ('Achuras','./assets/mokepons_mokepon_capipepo_attack.png,',5)

let ratatoile = new Mokepon ('Ratatoile','./assets/mokepons_mokepon_ratigueya_attack.png',5)

function iniciarJuego() {
   
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionReiniciar.style.display = 'none'

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)

    botonReiniciar.addEventListener('click',reiniciarJuego)
}

function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'

    if (document.getElementById('Pomelo').checked) {
        spawnMascotaJugador.innerHTML = 'Pomelo'

    } else if (document.getElementById('Achuras').checked) {
        spawnMascotaJugador.innerHTML = 'Achuras'

    } else if (document.getElementById('Ratatoile').checked) {
        spawnMascotaJugador.innerHTML = 'Ratatoile'

    } else {
        alert('SELECCIONA UNA MASCOTA:')
    }

    /*  alert("SELECCIONASTE A: " + mascota) */

    seleccionarMascotaEnemigo()


}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1, 3)
    
    if (mascotaAleatoria == 1) {
        spawnMascotaEnemigo.innerHTML = 'Pomelo '
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
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spawVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spawVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador = 'TIERRA' && ataqueEnemigo == 'AGUA') {
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

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}


function crearMensajeFinal(resultadoFinal) { 
    sectionMensajes.innerHTML = resultadoFinal

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true

    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)