//Cecilie JS start
  //Herunder er burgermenu lavet ved brug af "getElementById", som er hentet fra DOM.
  alert("BURGERHEJ");
  let burgerMenu = document.getElementById('burgermenu');
  let overlay = document.getElementById('menu');
  burgerMenu.addEventListener('click',function(){
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
  });
//Cecilie JS slut