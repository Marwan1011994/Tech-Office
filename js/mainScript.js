


// show and hidden div 

let showDiv = document.querySelector(".showdiv")
function showElement(){
    showDiv.removeAttribute("hidden")
}
function hiddenElement(){
    showDiv.setAttribute("hidden", "")
}


//  log in page
let codeId = document.getElementById("codeId")
let passId = document.getElementById("passId")
let submit = document.getElementById("submit")
submit.onclick = function(){
    if(codeId.value === "em" && passId.value === "0000" ){
        window.location.href='indicators.html';
    }
}

window.onload = function(){
    console.log(5)
}

let correctId = document.querySelector(".login .correctid")
let correctPass = document.querySelector(".login .correctpass")
let wrongId = document.querySelector(".login .wrongid")
let wrongPass = document.querySelector(".login .wrongpass")

codeId.onkeyup = function(){
    if(codeId.value === "em"){
        correctId.removeAttribute("hidden");
        wrongId.setAttribute("hidden","");
        passId.removeAttribute("readonly");

    }else if(codeId.value ===""){
        correctId.setAttribute("hidden","");
        wrongId.setAttribute("hidden","")
    }else{
        wrongId.removeAttribute("hidden")
        correctId.setAttribute("hidden","")
    }
}
passId.onkeyup = function(){
            if(passId.value === "0000"){
                correctPass.removeAttribute("hidden")
                wrongPass.setAttribute("hidden","")
        
            }else if(passId.value ===""){
                correctPass.setAttribute("hidden","");
                wrongPass.setAttribute("hidden","")
            }else{
                correctPass.setAttribute("hidden","")
                wrongPass.removeAttribute("hidden")
            }
    }

wrongId.onclick = function(){
    codeId.value ="";
    wrongId.setAttribute("hidden","");
}
wrongPass.onclick = function(){
    passId.value ="";
    wrongPass.setAttribute("hidden","")
}

