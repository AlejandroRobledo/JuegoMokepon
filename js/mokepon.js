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
    constructor(nombre, foto, vida,fotoMapa) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
        
    }

    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let pomelo = new Mokepon('Pomelo', './assets/mokepons_mokepon_hipodoge_attack.png', 5 , './assets/hipodoge.webp')

let achuras = new Mokepon('Achuras', './assets/mokepons_mokepon_capipepo_attack.png', 5 , './assets/capipepo.webp')

let ratatoile = new Mokepon('Ratatoile', './assets/mokepons_mokepon_ratigueya_attack.png', 5 , './assets/ratigueya.webp')


let pomeloEnemigo = new Mokepon('Pomelo', './assets/mokepons_mokepon_hipodoge_attack.png', 5 , './assets/hipodoge.webp')

let achurasEnemigo = new Mokepon('Achuras', './assets/mokepons_mokepon_capipepo_attack.png', 5 , './assets/capipepo.webp')

let ratatoileEnemigo = new Mokepon('Ratatoile', './assets/mokepons_mokepon_ratigueya_attack.png', 5 , './assets/ratigueya.webp')

//Empujo informacion al arreglo "ataques"
//Agregue los arreglos de los ataques enemigos
pomelo.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' }
)

pomeloEnemigo.ataques.push(
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

achurasEnemigo.ataques.push(
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

ratatoileEnemigo.ataques.push(
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
let mascotaJugadorObjeto
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
let mapaBackgraund = new Image()
mapaBackgraund.src ='./assets/mokemap.webp'
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 350

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800
mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

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
    sectionVerMapa.style.display = 'flex'
    iniciarMapa()
   
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

function seleccionarMascotaEnemigo(enemigo) {
    /* Modifico esta funcion para poder trabajar directamente con los objetos */
    spawnMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesMokeponEnemigo = enemigo.ataques
    secuenciaAtaque()
}


function ataqueAleatorioEnemigo() {
    console.log('ataques enemigo', ataquesMokeponEnemigo)
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


function pintarCanvas(){
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x +
     mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y +
     mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0 , 0, mapa.clientWidth, mapa.clientHeight)
    lienzo.drawImage(
        mapaBackgraund,
        0,
        0,
        mapa.width,
        mapa.height
    )
        mascotaJugadorObjeto.pintarMokepon()
        pomeloEnemigo.pintarMokepon()
        achurasEnemigo.pintarMokepon()
        ratatoileEnemigo.pintarMokepon()
        if (mascotaJugadorObjeto.velocidadX != 0 ||
             mascotaJugadorObjeto.velocidadY != 0) {

            revisarColision(pomeloEnemigo)
            revisarColision(achurasEnemigo)
            revisarColision(ratatoileEnemigo)
        }
}


/* Creo las funciones para que la mascota
se mueva en distintas direcciones */
function moverDerecha(){
    mascotaJugadorObjeto.velocidadX = 5
   
}

function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX = -5
}

function moverAbajo(){
    mascotaJugadorObjeto.velocidadY = 5
}

function moverArriba(){
    mascotaJugadorObjeto.velocidadY = - 5
}

function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}


function TeclaPresionada(event){
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
              moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
        default:
            break
    }
}

function iniciarMapa(){
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    mapa.width = 320
    mapa.height = 240
    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener('keydown', TeclaPresionada)
    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoMascota() {
    
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]
        }
    }
}

function revisarColision(enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota =
          mascotaJugadorObjeto.y
    const abajoMascota =
          mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota =
          mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota =
          mascotaJugadorObjeto.x



    if (abajoMascota < arribaEnemigo || arribaMascota > abajoEnemigo
        || derechaMascota < izquierdaEnemigo || izquierdaMascota > derechaEnemigo)  
        
        {
       return     
    } 
    detenerMovimiento()
    clearInterval(intervalo)
    console.log('Se detecto una colision')
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo)
     
}

window.addEventListener('load', iniciarJuego)