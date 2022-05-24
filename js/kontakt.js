//Cecilies JS
//alert("HELLO WORLD!");
    let navn = document.getElementById("navn");
    let mail = document.getElementById("mail");
    let tlf = document.getElementById("tlf");
    let emne = document.getElementById("emne");
    let besked = document.getElementById("besked");
    let error = document.getElementById("error");

    let borderColors = ["2px solid red", "1px solid green"];
    let errorMessages = ["Udfyld venligst alle oplysninger", "Mail, telefon, emne og besked mangler", "Telefon, emne og besked mangler", "Emne og besked mangler", "Besked mangler", "Din besked er sendt"];
    let colors = ["red", "black"];

    function check(){
        if(navn.value.length ==0 && mail.value.length ==0 && tlf.value.length ==0 && emne.value.length ==0 && besked.value.length ==0){
            navn.style.border = borderColors[0];
            mail.style.border = borderColors[0];
            tlf.style.border = borderColors[0];
            emne.style.border = borderColors[0];
            besked.style.border = borderColors[0];
            error.style.color = colors[0];
            error.innerHTML = errorMessages[0];
        }

        else if (navn.value.length !=0 && mail.value.length ==0 && tlf.value.length==0 && emne.value.length ==0 && besked.value.length ==0){
            error.innerHTML = errorMessages[1];
            error.style.color = colors[0];
            navn.style.border = borderColors[1];
            mail.style.border = borderColors[0];
            tlf.style.border = borderColors[0];
            emne.style.border = borderColors[0];
            besked.style.border = borderColors[0];
        }

        else if(navn.value.length !=0 && mail.value.length !=0 && tlf.value.length ==0 && emne.value.length ==0 && besked.value.length ==0){
            error.innerHTML = errorMessages[2];
            error.style.color = colors[0];
            navn.style.border = borderColors[1];
            mail.style.border = borderColors[1];
            tlf.style.border = borderColors[0];
            emne.style.border = borderColors[0];
            besked.style.border = borderColors[0];
        }
        else if(navn.value.length !=0 && mail.value.length !=0 && tlf.value.length !=0 && emne.value.length ==0 && besked.value.length ==0){
            error.innerHTML = errorMessages[3];
            error.style.color = colors[0];
            navn.style.border = borderColors[1];
            mail.style.border = borderColors[1];
            tlf.style.border = borderColors[1];
            emne.style.border = borderColors[0];
            besked.style.border = borderColors[0];
        }
        else if(navn.value.length !=0 && mail.value.length !=0 && tlf.value.length !=0 && emne.value.length !=0 && besked.value.length ==0){
            error.innerHTML = errorMessages[4];
            error.style.color = colors[0];
            navn.style.border = borderColors[1];
            mail.style.border = borderColors[1];
            tlf.style.border = borderColors[1];
            emne.style.border = borderColors[1];
            besked.style.border = borderColors[0];
        }
        else if(navn.value.length !=0 && mail.value.length !=0 && tlf.value.length !=0 && emne.value.length !=0 && besked.value.length == true){
            error.innerHTML = errorMessages[5];
            error.style.color = colors[1];
            navn.style.border = borderColors[1];
            mail.style.border = borderColors[1];
            tlf.style.border = borderColors[1];
            emne.style.border = borderColors[1];
            besked.style.border = borderColors[1];
            
        }
        else{
            console.log("Det virker overhovedet ikke")
        }
    }

    for (i = 0; i < errorMessages.length; i++){
        console.log(errorMessages[i])
    }

    const form = document.getElementById("form-contact");
    function handleform(event){
        console.log("stopreload")
        event.preventDefault();
    }
    form.addEventListener('submit', handleform);

