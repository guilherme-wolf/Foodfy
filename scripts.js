const modalOverlay = document.querySelector ('.modal-overlay');
const cards = document.querySelectorAll ('.card');
const recipes = document.querySelectorAll (".recipe");


for (let card of cards) {
    card.addEventListener("click" , function (){
        const title = card.querySelector("h3").textContent
        const autor = card.querySelector("p").textContent
        const imageId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src =`/image/assets/${imageId}.png`
        modalOverlay.querySelector('.modal-title h3').innerHTML = title
        modalOverlay.querySelector('.autor p').innerHTML = autor
    } )
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove ('active')
})

