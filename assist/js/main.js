// ======================================================= NAV SHOW ==================================================
// ---- VARIABLES CALL -----
let menu_iconn = document.querySelector('.menu_icon');
let navv = document.querySelector('.nav');


menu_iconn.onclick = () => {
// ----- Animation ------
    menu_iconn.classList.toggle('move');


// -----Open & Close ----
    navv.classList.toggle('navshow');

}





// ======================================================= SCROLL UP ==================================================
// ------ VARIABLES CALL -----
let scroll_upp = document.querySelector(".scroll_up")


// ------- OPEN SHOW -------
window.onscroll = function (){
  if (this.scrollY >= 500) {
    scroll_upp.classList.add("show");
  } else {
    scroll_upp.classList.remove("show");
  }
}


// ------- SCROLL TOP -------
scroll_upp.onclick = function (){
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// ======================================================= SCROLL UP ==================================================