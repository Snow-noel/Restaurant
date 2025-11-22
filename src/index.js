import { home } from "./home";
import { menu } from "./menu";
import { about } from "./about";
import "./styles.css";
 const main =document.getElementById("main-content");
const buttonhome=document.getElementById("home")
buttonhome.addEventListener("click",()=>{
   
    main.innerHTML="";
    home();
})
const buttonmenu=document.getElementById("menu")
buttonmenu.addEventListener("click",()=>{
    main.innerHTML="";
    menu();
})

const buttonAbout=document.getElementById("about");
buttonAbout.addEventListener("click",()=>{
    main.innerHTML=""
    about();
})

document.addEventListener("DOMContentLoaded",()=>{
    home();
})