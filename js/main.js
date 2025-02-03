// para declarar variables se pone "let" o "var" sy seguido del nombre de la variable. La diferencia entre los dos es que "var" es una variable mas global y "let" es mas concreta.
// Dos = sirven para comprobar el contenido, tes = sirven para comprobar el ontenido y los "valores"
// Desde JavaScript se puede acceder a cualquier "rama" de la estructura html.

console.log("Hello, world!");

let isma = 1;
var yanes = 2.0;

if(yanes > 1){
    let maria = false;
    console.log(maria);
}

console.log(0 === '0');

let array = ["alejandro", "anyi", "12", "true"];

for (let i = 0; i < array.length; i++){
    console.log(array[i]);
}

//Si no esperamos a que la pagina se haya cargado antes de acceder a sus elementos, pueden dar errores //cuando la pagina se ha cargado hacemos cosas
window.addEventListener("DOMContentLoaded", () => {
    let allH1s = document.getElementsByTagName("h1");
    console.log(allH1s);

    for( let i = 0; i < allH1s.length; i++){
        console.log(allH1s[i]);
        allH1s[i].innerHTML = "EDUARDO";
    }

    // let tiulo = document.getElementById("palabra-especial");
    // tiulo.classList.add("color- verde");

});  // lambda function -> para acceder a elementos de un documento.

function validate(event){
    event.preventDefault(); 
    let inputEmail = document.getElementById("input-mail");
    let inputPass = document.getElementById("input-pass");

    validateEmail(inputEmail);
    validatePass(inputPass);

}

function validateEmail(emailElement) {
    let userString = emailElement.value;
    
    let i = 0;
    while ( i < userString.length){

        if(userString[i] === '@'){
            emailElement.classList.remove("error");
            emailElement.classList.add("all-good");
            return
        }
        i++;
    }
    //Si salimos del bucle, significa que no hemos encontrado una @.
    // Asi que da error.
    emailElement.classList.remove("all-good");
    emailElement.classList.add("error");

}

function validatePass(passElement){
    let userStringPass = passElement.value;

    let i = 0;

        if(userStringPass.length > 5){
            passElement.classList.remove("error");
            passElement.classList.add("all-good");
            return
        }

    passElement.classList.remove("all-good");
    passElement.classList.add("error")
        
}





