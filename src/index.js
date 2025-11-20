import { home } from "./home";
//import "../src/pictures/restaurant.jpg";
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
    home();
})
