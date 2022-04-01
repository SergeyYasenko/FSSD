// ACCORDION

$(document).ready(function () {
   $('.faq__accordion-title').click(function (_event) {
      if ($('.faq__block-row').hasClass('one')) {
         $('.faq__accordion-title').not($(this)).removeClass('active');
         $('.faq__accordion-text').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
   });
});

// ПЛАВНЫЙ ПЕРЕХОД ПО ЯКОРНЫМ ССЫЛКАМ

// const menuLinks = document.querySelectorAll('.nav[data-goto]');
// if (menuLinks.length > 0) {
//    menuLinks.forEach(menuLink => {
//       menuLink.addEventListener("click", onMenuLinkClick);
//    });
//    function onMenuLinkClick(e) {
//       const menuLink = e.target;
//       if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
//          const gotoBlock = document.querySelector(menuLink.dataset.goto);
//          const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.full-screen__navigation').offsetHeight;

//          if (iconMenu.classList.contains('_active')) {
//             document.body.classList.remove('_lock');
//             iconMenu.classList.remove('_active');
//             fullScreenInfoRow.classList.remove('_active');
//             fullScreenInfo.classList.remove('_active');
//          }

//          window.scrollTo({
//             top: gotoBlockValue,
//             behavior: "smooth"
//          });
//          e.preventDefault();
//       }
//    }
// }