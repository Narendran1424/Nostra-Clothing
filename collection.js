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

var productsimages=document.getElementById("products")
var search=document.getElementById("search")
var productlist=productsimages.querySelectorAll("div")

search.addEventListener("keyup",()=>{
    var enteredvalue=event.target.value.toUpperCase()

    for(count=0; count<productlist.length;count++){
        var productname=productlist[count].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enteredvalue)<0){
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})

let summer=document.getElementById("summer")
let party=document.getElementById("party")
let beach=document.getElementById("beach")
let black=document.getElementById("black")
let blue=document.getElementById("blue")
let white=document.getElementById("white")
let green=document.getElementById("green")
let old=document.getElementById("old")
let newarrival=document.getElementById("new")


let blackshirt=document.getElementById("products-box-1")
let multishirt=document.getElementById("products-box-2")
let floralshirt=document.getElementById("products-box-3")
let blueshirt=document.getElementById("products-box-4")
let printedmultishirt=document.getElementById("products-box-5")
let greensummershirt=document.getElementById("products-box-6")
let orangeshirt=document.getElementById("products-box-7")
let oldshirt=document.getElementById("products-box-8")
let newshirt=document.getElementById("products-box-9")


summer.addEventListener('click',()=>{
    blackshirt.style.display="none"
    multishirt.style.display="none"
    floralshirt.style.display="none"
    blueshirt.style.display="none"
    printedmultishirt.style.display="block"
    greensummershirt.style.display="block"
    orangeshirt.style.display="none"
    oldshirt.style.display="none"
    newshirt.style.display="none"
})

party.addEventListener('click',()=>{
    blackshirt.style.display="block"
    multishirt.style.display="none"
    floralshirt.style.display="block"
    blueshirt.style.display="none"
    printedmultishirt.style.display="none"
    greensummershirt.style.display="none"
    orangeshirt.style.display="none"
    oldshirt.style.display="none"
    newshirt.style.display="none"
})

beach.addEventListener('click',()=>{
    blackshirt.style.display="none"
    multishirt.style.display="none"
    floralshirt.style.display="none"
    blueshirt.style.display="none"
    printedmultishirt.style.display="none"
    greensummershirt.style.display="none"
    orangeshirt.style.display="block"
    oldshirt.style.display="block"
    newshirt.style.display="none"
})

black.addEventListener('click',()=>{
    blackshirt.style.display="block"
    multishirt.style.display="none"
    floralshirt.style.display="block"
    blueshirt.style.display="none"
    printedmultishirt.style.display="none"
    greensummershirt.style.display="none"
    orangeshirt.style.display="none"
    oldshirt.style.display="none"
    newshirt.style.display="none"
})

blue.addEventListener('click',()=>{
    blackshirt.style.display="none"
    multishirt.style.display="none"
    floralshirt.style.display="none"
    blueshirt.style.display="block"
    printedmultishirt.style.display="none"
    greensummershirt.style.display="none"
    orangeshirt.style.display="none"
    oldshirt.style.display="none"
    newshirt.style.display="none"
})

white.addEventListener('click',()=>{
    blackshirt.style.display="none"
    multishirt.style.display="block"
    floralshirt.style.display="none"
    blueshirt.style.display="none"
    printedmultishirt.style.display="block"
    greensummershirt.style.display="none"
    orangeshirt.style.display="none"
    oldshirt.style.display="none"
    newshirt.style.display="none"
})

green.addEventListener('click',()=>{
    blackshirt.style.display="none"
    multishirt.style.display="none"
    floralshirt.style.display="none"
    blueshirt.style.display="none"
    printedmultishirt.style.display="none"
    greensummershirt.style.display="block"
    orangeshirt.style.display="none"
    oldshirt.style.display="block"
    newshirt.style.display="none"
})

old.addEventListener('click',()=>{
    blackshirt.style.display="none"
    multishirt.style.display="none"
    floralshirt.style.display="none"
    blueshirt.style.display="none"
    printedmultishirt.style.display="none"
    greensummershirt.style.display="none"
    orangeshirt.style.display="none"
    oldshirt.style.display="block"
    newshirt.style.display="none"
})

newarrival.addEventListener('click',()=>{
    blackshirt.style.display="none"
    multishirt.style.display="none"
    floralshirt.style.display="none"
    blueshirt.style.display="none"
    printedmultishirt.style.display="none"
    greensummershirt.style.display="none"
    orangeshirt.style.display="none"
    oldshirt.style.display="none"
    newshirt.style.display="block"
})