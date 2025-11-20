import { home } from "./home";
//import "../src/pictures/restaurant.jpg";
import "./styles.css";
const button=document.getElementById("home")
button.addEventListener("click",()=>{
    const main =document.getElementById("main-content");
    main.innerHTML="";
    home();
})
