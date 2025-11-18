

export const home=()=>{
   const main =document.getElementById("main-content"); 
   const content=document.createElement('h2')
   content.textContent="welcome to our restaurant";
   main.append(content);
}