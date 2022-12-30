const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let subtitleEl = document.getElementById("subtitle-el")
let buttonEl = document.getElementById("button-el")
let passOneEl = document.getElementById("pass1-el")
let passTwoEl = document.getElementById("pass2-el")

subtitleEl.textContent = "Never use an insecure password again."
buttonEl.textContent = "Generate passwords"

let passLenght = 15

function getRandomIndex() {
   let charIndex = Math.floor(Math.random() * characters.length)
   return characters[charIndex]
}
//console.log(getRandomIndex())

function getPassword() {
    let randomPassword = ""
    for (let i = 0; i < passLenght; i++) {
       randomPassword += getRandomIndex()
    }
    return randomPassword
}

buttonEl.addEventListener("click", function(){
    const passwordOne = getPassword()
    const passwordTwo = getPassword()
    if (passOneEl.textContent === ""){
        passOneEl.textContent = passwordOne
        passTwoEl.textContent = passwordTwo
    } else {
        passOneEl.textContent = passwordOne
        passTwoEl.textContent = passwordTwo
    }
    
})