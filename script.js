let time = 1500,
currentImageIndex = 0,
images = document.querySelectorAll(".instFoto img");
max = images.length;

//função puxa imagem
function proxImagem(){

    images[currentImageIndex].classList.remove("celular");
    currentImageIndex++;
    if(currentImageIndex >= max){
        currentImageIndex = 0;
    }
    images[currentImageIndex].classList.add("celular");
}

function start(){
    setInterval(() =>{
        proxImagem();
    }, time);
}

window.addEventListener("load", start);