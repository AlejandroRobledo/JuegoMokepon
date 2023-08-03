
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click',reiniciarJuego)
}

function seleccionarMascotaJugador() {

    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'
    
    let spawnMascotaJugador = document.getElementById('mascota-jugador')

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
    let spawnMascotaEnemigo = document.getElementById('mascota-enemigo')

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

    let spawVidasJugador = document.getElementById('vidas-jugador')
    let spawVidasEnemigo = document.getElementById('vidas-enemigo')

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
    let sectionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}




function crearMensajeFinal(resultadoFinal) {
    
    let sectionMensajes = document.getElementById('resultado')
    let parrafo = document.createElement('p')

    sectionMensajes.innerHTML = resultadoFinal

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)