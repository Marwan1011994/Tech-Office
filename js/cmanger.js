let waste= document.querySelectorAll("body .waste")
let water= document.querySelectorAll("body .water")
let typeWater= document.querySelector(".type-water .form-select")
let fillter= document.querySelector("input[type='submit']")
// let reset= document.querySelector("input[type='reset']")

// reset.onclick = () => window.location.reload()
// window.onloadeddata = function(){
//     if(typeWater.options[0].innerHTML === "مياه"){
//         water.forEach(function(ele){
//             ele.style.display = "block"
//         })
//         waste.forEach(function(ele){
//             ele.style.display = "none"
//         })
//     }else{
//         water.forEach(function(ele){
//             ele.style.display = "none"
//         })
//         waste.forEach(function(ele){
//             ele.style.display = "block"
//         })
//     }
// }

fillter.onclick = function(){
    if(typeWater.options[1].selected){
        water.forEach(function(ele){
            ele.style.display = "none"
        })
        waste.forEach(function(ele){
            ele.style.display = "block"
        })
    }else if (typeWater.options[0].selected){
        water.forEach(function(ele){
            ele.style.display = "block"
        })
        waste.forEach(function(ele){
            ele.style.display = "none"
        })
    }
}

// let noteDiv = document.querySelector(".main-page .notediv")
// setTimeout(function(){
//     noteDiv.style.display = "none"
// },4000)

//////////////////////////////////////////////////
// aside navbar

let checkbox = document.querySelector(".btn-aside")
let aside = document.querySelector("aside")
console.log(checkbox)
checkbox.onclick = function(){
    if (checkbox.checked == true){
        aside.removeAttribute("hidden")
    } else {
        aside.setAttribute("hidden","")
        contacts.setAttribute("hidden","")
        shownoti.setAttribute("hidden","")
      }
}
let showNote = document.querySelectorAll(".show-note")
let divCont = document.querySelectorAll(".div-cont")

showNote.forEach(function(ele,ind){
    ele.onmouseover = function(){
        divCont[ind].removeAttribute("hidden")
    }
    ele.onmouseout = function(){
        divCont[ind].setAttribute("hidden","")
    }
})

let  leftLinecont = document.querySelector(".divcontacts .left-line i")
let  leftLinenote = document.querySelector(".notification .left-line i")
let contacts = document.querySelector(".divcontacts")
let numbers = document.querySelector(".numbers")
let shownoti = document.querySelector(".notification")
let notifications = document.querySelector(".notifications")
leftLinecont.onclick =function(){
    contacts.setAttribute("hidden","")
}
leftLinenote.onclick =function(){
    shownoti.setAttribute("hidden","")
}
numbers.onclick = function(){
    contacts.removeAttribute("hidden")
}
notifications.onclick = function(){
    shownoti.removeAttribute("hidden")
}