let password = document.getElementById("password");
const letters = "GHBBFGHJGHJBvdhlsjdscmdhd2384749lkw5";
let passwordLength = 15;
let passwordProblem = "";

const generatePassword = function(lunghezza){
    if(lunghezza < 15){
        alert("password non sicura, riprova");
        return;
    }
    let randomString = '';
    for(let i=0; i< lunghezza; i++){
        let randomChar = Math.floor(Math.random() * letters.length);
        randomString += letters.charAt(randomChar);
    }

    return randomString;
}

const randomPassword = generatePassword(15);
console.log(randomPassword);

document.getElementById("password").value = randomPassword;

function copyPassword(){
    let copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");
}

