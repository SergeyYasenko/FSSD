window.onscroll = function showHeader() {
   const header = document.querySelector(".header");

   if (window.pageYOffset > 700) {
      header.classList.add("_fixed");
   } else {
      header.classList.remove("_fixed");
   }
}