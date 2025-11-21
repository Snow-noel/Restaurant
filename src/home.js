 import barger from "./pictures/homeimg.jpeg"

export const home=()=>{
   const main =document.getElementById("main-content");
   const section=document.createElement("section");
      const content= document.createElement('div');
      const message=document.createElement('h3')
      const top=document.createElement('h2')
       const bottom=document.createElement('h2')
      const myimage=document.createElement('img');
      top.classList.add("top");
      bottom.classList.add("bottom");
      section.classList.add("shows");
      bottom.textContent="Feel Free With Snow Our Chef"
      top.textContent="Welcome To Kumadya"
      myimage.src=barger;
      myimage.style.cssText=`
      height:250px;
      min-width:100%;
      border-radius:10px;
      `
      content.classList.add("content")
      myimage.classList.add('home-image');
      message.classList.add('welcome')
      message.textContent=`
         Where every meal is prepared with passion, flavor, and a touch of home.
         Whether you're here for a quick bite or a full feast, 
         we promise fresh tastes, warm smiles, and unforgettable moments.`;
      main.append(section);
      section.append(myimage,content);
      content.append(top,message,bottom)
      setTimeout(()=>{
         section.classList.add("show")
      },20)

}