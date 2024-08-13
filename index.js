let popupbox=document.querySelector(".popupbox")
let xmark=document.getElementById("icon")
xmark.addEventListener('click',()=>{
    popupbox.style.display="none"
})

let sidenav=document.querySelector(".side-navbar")
let body=document.querySelector("body")
function showNavbar(){
    body.style.opacity="0.9"
    sidenav.style.left="0"
    sidenav.style.opacity="1"
}

function closeNavbar(){
    sidenav.style.left="-60%"
    body.style.opacity="1"
}
let rightbtn1=document.querySelector(".right-btn1")
let rightbtn2=document.querySelector(".right-btn2")
let rightbtn3=document.querySelector(".right-btn3")

let images = document.querySelector(".images");
rightbtn1.addEventListener('click',()=>{
    images.style.transform="translateX(-100vw)"
})
rightbtn2.addEventListener('click',()=>{
    images.style.transform="translateX(-200vw)"
})
rightbtn3.addEventListener('click',()=>{
    images.style.transform="translateX(0vw)"
})

let leftbtn1=document.querySelector(".left-btn1")
let leftbtn2=document.querySelector(".left-btn2")
let leftbtn3=document.querySelector(".left-btn3")

leftbtn1.addEventListener('click',()=>{
    ((rightbtn3.parentElement).parentElement).style.transform="translateX(-200vw)"
})
leftbtn2.addEventListener('click',()=>{
    ((leftbtn1.parentElement).parentElement).style.transform="translateX(0vw)"
})
leftbtn3.addEventListener('click',()=>{
    ((leftbtn2.parentElement).parentElement).style.transform="translateX(-100vw)"
})

let servicecontainer1=document.querySelector(".service-container-1")
let limited=document.querySelector(".limited-container")
window.onscroll=()=>{
    servicecontainer1.style.left="0"
    limited.style.left="0"
}

    