const modalOverlay = document.querySelector ('.modal-overlay');
const cards = document.querySelectorAll ('.card');


for (let card of cards) {
    card.addEventListener("click" , function (){
        const imageId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src =`/image/assets/${imageId}.png`
        const TextTitle = document.querySelector(".title")
        modalOverlay.querySelector("h3").textContent = TextTitle

    } )
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove ('active')
})


