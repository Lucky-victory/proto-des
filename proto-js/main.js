const header= document.querySelector('.header');
const bannerSlides= document.querySelectorAll('.banner');

let slideIndex=0;


function slider() {
  slideIndex++;
  if(slideIndex > bannerSlides.length - 1){
    slideIndex=0;
    
  }
  document.querySelector('.banner.active--banner').classList.remove('active--banner');
  bannerSlides[slideIndex].classList.add('active--banner');
  
}
setInterval(slider,4000)