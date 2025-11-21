import { home } from "./home";
import { menu } from "./menu";
import { about } from "./about";
import "./styles.css";
const buttonhome=document.getElementById("home")
buttonhome.addEventListener("click",()=>{
    const main =document.getElementById("main-content");
    main.innerHTML="";
    home();
})
const buttonmenu=document.getElementById("menu")
buttonmenu.addEventListener("click",()=>{
    const main =document.getElementById("main-content");
    main.innerHTML="";
    menu();
})

const buttonAbout=document.getElementById("about");
buttonAbout.addEventListener("click",()=>{
    const main=document.getElementById("main-content");
    main.innerHTML=""
    about();
})