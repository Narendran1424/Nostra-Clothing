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