import {verificarTema, trocarTema } from "../../helpers/tema-helper.js"

const botaoTema = document.querySelector(".tema button")
const body = document.querySelector("body")
const assunto = localStorage.getItem("assunto")

let quiz = {}
let pontos = 0
let pergunta = 1

botaoTema.addEventListener("click", () => {
    trocarTema(body, botaoTema)
})

verificarTema(body, botaoTema)

function alterarAssunto() {
    const divIcone = document .querySelector(".assunto_icone")
    const iconeImg = document.querySelector(".assunto_icone img")
    const assuntoTitulo = document.querySelector(".assunto h1")

    divIcone.classList.add(assunto.toLowerCase())
    iconeImgsetAttribute("scr", `../../assets/images/icon-${assunto.toLowerCase()}.svg`)
    iconeImg.setAttribute("alt", `icone de ${assunto}`)
    assuntoTitulo.innerText = assunto 
}

alterarAssunto()

async function buscarPerguntas () {
    const urlDados = "../../data.json"
    
   await fetch(urlDados).then(resposta => resposta.json()).them(dados => {
        dados.quizzes.forEach(dado => {
            if(dado.title === assunto) {
                quiz = dado
        }
    })
})
    console.log(dado)
}


buscarPerguntas()