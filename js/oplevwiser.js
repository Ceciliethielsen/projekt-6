const closedFace = document.querySelector(".closed");
const openFace = document.querySelector(".open");

closedFace.addEventListener("mouseover", () => { //mouseover kunne også være click //
    if (openFace.classList.contains("open")) {
        openFace.classList.add("active");
        closedFace.classList.remove("active");
    }
});

openFace.addEventListener("mouseout", () => {  //mouseout kunne også være click //
    if (closedFace.classList.contains("closed")) {
        closedFace.classList.add("active");
        openFace.classList.remove("active");
    }
});



const closedFaceEn = document.querySelector(".closedEn");
const openFaceEn = document.querySelector(".openEn");

closedFaceEn.addEventListener("click", () => { //mouseover kunne også være click //
    if (openFaceEn.classList.contains("openEn")) {
        openFaceEn.classList.add("activeEn");
        closedFaceEn.classList.remove("activeEn");
    }
});

openFaceEn.addEventListener("click", () => {  //mouseout kunne også være click //
    if (closedFaceEn.classList.contains("closedEn")) {
        closedFaceEn.classList.add("activeEn");
        openFaceEn.classList.remove("activeEn");
    }
});



const closedFaceTn = document.querySelector(".closedTn");
const openFaceTn = document.querySelector(".openTn");

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


function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("simu2.png")) {
        image.src = "img/oplevwiser/simu1.png";
    }
    else {
        image.src = "img/oplevwiser/simu2.png";
    }
}