//Cecilie JS start
  //Navigationsbar med dropdown
  //Herunder clickfunktion for at åbne dropdown - toggle bruges til at skifte mellem at vise og skjule content i dropdown
  //funktion til knap 1
  function myFunction1() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  //Lukker dropdown, hvis brugeren klikker et andet sted på siden
  window.onclick = function(e) {
    if (!e.target.matches('.btn1')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

  //funktion til knap 2
  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  window.onclick = function(e) {
    if (!e.target.matches('.btn1')) {
    var myDropdown2 = document.getElementById("myDropdown2");
      if (myDropdown2.classList.contains('show')) {
        myDropdown2.classList.remove('show');
      }
    }
  }

  //Funktion til knap 3
  function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
  }
  window.onclick = function(e) {
    if (!e.target.matches('.btn1')) {
    var myDropdown3 = document.getElementById("myDropdown3");
      if (myDropdown3.classList.contains('show')) {
        myDropdown3.classList.remove('show');
      }
    }
  }

  //Funktion til knap 4
  function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show");
  }
  window.onclick = function(e) {
    if (!e.target.matches('.btn1')) {
    var myDropdown4 = document.getElementById("myDropdown4");
      if (myDropdown4.classList.contains('show')) {
        myDropdown4.classList.remove('show');
      }
    }
  }
  //Herunder er burgermenu lavet ved brug af "getElementById", som er hentet fra DOM.
  let burgerMenu = document.getElementById('burgermenu');
  let overlay = document.getElementById('menu');
  burgerMenu.addEventListener('click',function(){
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
  });
//Cecilie JS slut