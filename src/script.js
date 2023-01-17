let btn = document.getElementsByClassName("header__menu-btn")[0];
let nav = document.getElementsByClassName("header__bottom-nav")[0];
btn.addEventListener('click',()=>{
  nav.classList.toggle("collapse");
})
