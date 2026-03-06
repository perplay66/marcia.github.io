// ESTRELAS

const canvas = document.getElementById("stars")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let stars = []

for(let i=0;i<200;i++){

stars.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2

})

}

function drawStars(){

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="white"

stars.forEach(s=>{

ctx.fillRect(s.x,s.y,s.size,s.size)

})

requestAnimationFrame(drawStars)

}

drawStars()


// ABRIR CARTA

const carta = document.querySelector(".envelope")
const conteudo = document.getElementById("conteudo")
const musica = document.getElementById("musica")

carta.onclick = () =>{

document.getElementById("carta").style.display="none"

conteudo.style.display="block"

musica.play()

}


// CONTADOR

const contador = document.getElementById("contador")

const dataInicio = new Date(2008, 7, 9) // 09 de agosto de 2008

function atualizar(){

const agora = new Date()

let anos = agora.getFullYear() - dataInicio.getFullYear()
let meses = agora.getMonth() - dataInicio.getMonth()
let dias = agora.getDate() - dataInicio.getDate()
let horas = agora.getHours() - dataInicio.getHours()
let minutos = agora.getMinutes() - dataInicio.getMinutes()
let segundos = agora.getSeconds() - dataInicio.getSeconds()

if(segundos < 0){
segundos += 60
minutos--
}

if(minutos < 0){
minutos += 60
horas--
}

if(horas < 0){
horas += 24
dias--
}

if(dias < 0){
const ultimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate()
dias += ultimoMes
meses--
}

if(meses < 0){
meses += 12
anos--
}

contador.innerHTML =
`${anos} anos • ${meses} meses • ${dias} dias<br>
${horas} horas • ${minutos} minutos • ${segundos} segundos ❤️`

}

atualizar()
setInterval(atualizar,1000)

// BOTAO MUSICA

document.getElementById("botaoMusica").onclick = ()=>{

musica.play()

}