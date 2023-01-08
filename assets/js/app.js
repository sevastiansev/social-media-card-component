const btnModal = document.getElementById("btn");
let boxModal = document.querySelector(".box-modal");
const btnClose = document.getElementById("btn-close");

function showModal(){
    boxModal.classList.toggle("active");
}

btnModal.addEventListener("click",showModal);
btnClose.addEventListener("click",showModal)
