// ГАМБУРГЕР
const fullScreenInfoRow = document.querySelector('.wrapper');
const fullScreenInfo = document.querySelector('.menu__burger-nav');
const iconMenu = document.querySelector('.menu__line');
if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      fullScreenInfoRow.classList.toggle('_active');
      fullScreenInfo.classList.toggle('_active');
   });
}