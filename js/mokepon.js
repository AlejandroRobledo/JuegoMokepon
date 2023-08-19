/* Funcion iniciarJuego */
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')

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
const contenedorAtaques = document.getElementById('contenedorAtaques')
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
        this.x = 20
        this.y = 30
        this.ancho = 80
        this.alto = 80
        this.mapaFoto = new Image()
        this.mapaFoto.src = foto
        
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

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')


let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let inputPomelo
let inputAchuras
let inputRatatoile
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo
let opcionDeMokepones
let botonFuego
let botonAgua
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")

//En el metodo "push" lo que este adentro, lo va a "empujar" al arreglo y lo va a guardar
/* mokepones.push(pomelo,achuras,ratatoile) */

mokepones.push(pomelo, achuras, ratatoile)


function iniciarJuego() {
    /* En una variable "opcionDeMokepones" encapsulo etiqueta HTML, luego reemplazo los nombres anteriores
    por las propiedades de dicho objeto*/

    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'

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


    

    sectionReiniciar.style.display = 'none'




    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {


    sectionSeleccionarMascota.style.display = 'none'
    /* Creo mi primer canvas con imagen de la mascota incluida */

    /* sectionSeleccionarAtaque.style.display = 'flex' */
    sectionVerMapa.style.display = 'flex'
   

    if (inputPomelo.checked) {
        /*  Borro informacion escrita a mano para utilizar la informacion proveniente
         de nuetros objetos */
        spawnMascotaJugador.innerHTML = inputPomelo.id
        mascotaJugador = inputPomelo.id

    } else if (inputAchuras.checked) {
        spawnMascotaJugador.innerHTML = inputAchuras.id
        mascotaJugador = inputAchuras.id

    } else if (inputRatatoile.checked) {
        spawnMascotaJugador.innerHTML = inputRatatoile.id
        mascotaJugador = inputRatatoile.id

    } else {
        alert('SELECCIONA UNA MASCOTA:')
    }

    /*  alert("SELECCIONASTE A: " + mascota) */

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}


function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }

    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}
        </button> 
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })
    /* Como los botones de arriba ya existen ahora puedo agregarle su id */

    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.BAtaque')

}


function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            console.log(e)
            /* la 'e' significa cuando le haga click me regresara el mismo evento */
            if (e.target.innerText === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else if (e.target.innerText === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })

}

function seleccionarMascotaEnemigo() {
    /* Modifico esta funcion para poder trabajar directamente con los objetos */
    let mascotaAleatoria = aleatorio(0, mokepones.length - 1)
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques

    spawnMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    secuenciaAtaque()
}


function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length - 1)

    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push('FUEGO')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA')
    } else {
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()

}

/* Esta funcion valida si el jugador selecciono sus 5 ataques para poder iniciar
el combate */
function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()
    }
}

/* 
Esta funcion me trae tanto el ataque del jugador como del enemigo
segun en la posicion en la que se encuentre el arreglo (index) */
function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}


function combate() {

    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE")
        }
        else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA') {
            indexAmbosOponentes(index, index)
            crearMensaje('GANASTE')
            victoriasJugador++
            spawVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO') {
            indexAmbosOponentes(index, index)
            crearMensaje('GANASTE')
            victoriasJugador++
            spawVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA') {
            indexAmbosOponentes(index, index)
            crearMensaje('GANASTE')
            victoriasJugador++
            spawVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponentes(index, index)
            crearMensaje('PERDISTE')
            victoriasEnemigo++
            spawVidasEnemigo.innerHTML = vidasEnemigo
        }
    }

    revisarVidas()
}

/* Se cambio la logica de la funcion en base a las victorias de los jugadores */
function revisarVidas() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("Esto fue un EMPATE!!!")
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal("FELICITACIONES! Ganaste ✨🎉!")
    } else {
        crearMensajeFinal("Lo siento, PERDISTE 😢")
    }
}


/* Imprime el resultado final de la batalla */
function crearMensaje(resultado) {

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo


    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}




function crearMensajeFinal(resultadoFinal) {
    let parrafo = document.createElement('p')

    sectionMensajes.innerHTML = resultadoFinal

    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function pintarPersonaje(){
    lienzo.clearRect(0 , 0, mapa.clientWidth, mapa.clientHeight)
    lienzo.drawImage(
        pomelo.mapaFoto,
        pomelo.x,
        pomelo.y,
        pomelo.ancho,
        pomelo.alto
    )
}

function moverPomelo(){
    pomelo.x = pomelo.x+5
    pintarPersonaje()
}


window.addEventListener('load', iniciarJuego)