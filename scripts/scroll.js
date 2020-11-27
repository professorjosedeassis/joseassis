/**
 * Efeito scroll suave
 * @author Professor José de Assis
 */

document.querySelector('#topSite').addEventListener('click', function (event) {
    event.preventDefault() //ignorar o link
    topoSite('header') //"invocar" a fução topoSite passando o elemento header(cabeçalho) como "alvo" 
})

function topoSite(element) {
    document.querySelector(element).scrollIntoView({ behavior: 'smooth' }) //smooth(suave) auto(direto)
}