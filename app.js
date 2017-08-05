window.addEventListener("DOMContentLoaded", init);

var slider,
    next,
    prev,
    images,
    imagesCount,
    currentImage = 0;
  

function init(){
  slider = document.querySelector(".slider-slides");
  slider.style.left = "0";
  
  
  images = document.querySelectorAll(".slider-img");
  
  prev = document.querySelector(".prev");
  
  next = document.querySelector(".next");
  
 
  next.onclick = function(){
    onClickNext();
  };
  }

function onClickNext() {
  if (currentImage == imagesCount - 1) {
    slideTo(0);
  } else {
    slideTo(currentImage + 1);
  }
}












