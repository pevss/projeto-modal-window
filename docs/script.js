'use strict';

const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const btnCloseModal = document.querySelector(".close-modal")
const btnsShowModal = document.querySelectorAll(".show-modal")

const closeModal = () => {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}

const showModal = () => {
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden") 
}

for (let i = 0; i < btnsShowModal.length; i++){
    btnsShowModal[i].addEventListener("click", showModal)
}

btnCloseModal.addEventListener("click", closeModal)
overlay.addEventListener("click", closeModal)

document.addEventListener("keydown", function(event){
    if(event.key === "Escape" && !modal.classList.contains("hidden")){
        closeModal()   
    }
})