 import barger from "./pictures/barger.jpg"

export const home=()=>{
   const main =document.getElementById("main-content");
      const content=document.createElement('h2')
      const myimage=document.createElement('img');
      myimage.src=barger;
      myimage.style.cssText=`
      height:300px;
      width:300px;
      `
      content.textContent="welcome to our restaurant";
      content.style.color="white";
      main.append(myimage);
      main.append(content); 
}