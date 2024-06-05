let submit = document.querySelector(".submit");
let icon = document.querySelector(".icon");
let ending = document.querySelector(".ending");
let iconShape = document.querySelectorAll(".icon-shape");
let spanChoice = document.querySelector("span");

let iconShapeArr = [...iconShape];
let val = 0 ;



for (let i = 0 ; i < iconShapeArr.length ; i++) {
    iconShapeArr[i].addEventListener("click",function() {
        val = iconShapeArr[i].textContent ;
    })
    submit.addEventListener("click",function () {
        icon.style.display = "none";
        ending.style.display = "flex";
        spanChoice.textContent = val ;
    })
}



