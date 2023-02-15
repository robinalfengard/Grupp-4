const username = document.getElementById("username")
const email = document.getElementById("email")
const statusTry = document.querySelector(".status")



function validEmail(){
    if(email.value.includes(username.value)){
        
        statusTry.innerHTML="The username and email are to similar"
        statusTry.classList.add("error")
    } else {
        statusTry.innerHTML=""
    }
    if (!isValidEmailAddress(email.value)){
        statusTry.innerHTML = "Email adress is not valid"
        statusTry.classList.add("error")
    }
}




function isValidEmailAddress(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) != null;
};