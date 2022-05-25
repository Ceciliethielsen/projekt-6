function changeImagei() {
    var image = document.getElementById('myImagei');
    if (image.src.match("lysmedtekst.svg")) {
        image.src = "img/oplevwiser/forsidemedtekstgtgt.svg";
    }
    else {
        image.src = "img/oplevwiser/lysmedtekst.svg";
    }
}

function changeImagea() {
    var image = document.getElementById('myImagei');
    if (image.src.match("vandogtekst.svg")) {
        image.src = "img/oplevwiser/forsidemedtekstgtgt.svg";
    }
    else {
        image.src = "img/oplevwiser/vandogtekst.svg";
    }
}

function changeImageb() {
    var image = document.getElementById('myImagei');
    if (image.src.match("rogalarmmedtekstgtgt.svg")) {
        image.src = "img/oplevwiser/forsidemedtekstgtgt.svg";
    }
    else {
        image.src = "img/oplevwiser/rogalarmmedtekstgtgt.svg";
    }
}

function changeImagec() {
    var image = document.getElementById('myImagei');
    if (image.src.match("sensorogtekst.svg")) {
        image.src = "img/oplevwiser/forsidemedtekstgtgt.svg";
    }
    else {
        image.src = "img/oplevwiser/sensorogtekst.svg";
    }
}







let closedFaceTn = document.querySelector(".closedTn");
let openFaceTn = document.querySelector(".openTn");

closedFaceTn.addEventListener("click", () => { //mouseover kunne også være click //
    if (openFaceTn.classList.contains("openTn")) {
        openFaceTn.classList.add("activeTn");
        closedFaceTn.classList.remove("activeTn");
    }
});

openFaceTn.addEventListener("click", () => {  //mouseout kunne også være click //
    if (closedFaceTn.classList.contains("closedTn")) {
        closedFaceTn.classList.add("activeTn");
        openFaceTn.classList.remove("activeTn");
    }
});

let closedFaceTi = document.querySelector(".closedTi");
let openFaceTi = document.querySelector(".openTi");

closedFaceTi.addEventListener("click", () => { //mouseover kunne også være click //
    if (openFaceTi.classList.contains("openTi")) {
        openFaceTi.classList.add("activeTi");
        closedFaceTi.classList.remove("activeTi");
    }
});

openFaceTi.addEventListener("click", () => {  //mouseout kunne også være click //
    if (closedFaceTi.classList.contains("closedTi")) {
        closedFaceTi.classList.add("activeTi");
        openFaceTi.classList.remove("activeTi");
    }
});

let closedFaceTa = document.querySelector(".closedTa");
let openFaceTa = document.querySelector(".openTa");

closedFaceTa.addEventListener("click", () => { //mouseover kunne også være click //
    if (openFaceTa.classList.contains("openTa")) {
        openFaceTa.classList.add("activeTa");
        closedFaceTa.classList.remove("activeTa");
    }
});

openFaceTa.addEventListener("click", () => {  //mouseout kunne også være click //
    if (closedFaceTa.classList.contains("closedTa")) {
        closedFaceTa.classList.add("activeTa");
        openFaceTa.classList.remove("activeTa");
    }
});


let closedFaceTb = document.querySelector(".closedTb");
let openFaceTb = document.querySelector(".openTb");

closedFaceTb.addEventListener("click", () => { //mouseover kunne også være click //
    if (openFaceTb.classList.contains("openTb")) {
        openFaceTb.classList.add("activeTb");
        closedFaceTb.classList.remove("activeTb");
    }
});

openFaceTb.addEventListener("click", () => {  //mouseout kunne også være click //
    if (closedFaceTb.classList.contains("closedTb")) {
        closedFaceTb.classList.add("activeTb");
        openFaceTb.classList.remove("activeTb");
    }
});