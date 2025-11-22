export const about=()=>{
  const myname=document.createElement('h5')
  myname.classList.add('snow')
  myname.textContent="Done by Snow @Skunkie";
  const main=document.getElementById("main-content");
  const aboutContainer=document.createElement('div');
  aboutContainer.classList.add('aboutContainer')
  const missioncontainer=document.createElement('div')
  missioncontainer.classList.add('Container')
  const mission =document.createElement('h2')
  mission.textContent="Our Mission!";
  mission.classList.add("mission");
  const missionContent=document.createElement('h4')
  missionContent.setAttribute("class", "missioncontent");
  missionContent.textContent=`Our mission is to deliver high-quality 
  cuisine made from the freshest ingredients while providing exceptional 
  service. We are committed to offering a dining experience that is 
  consistent, flavorful, and memorable for every customer.`
  const choose=document.createElement('h2')
  choose.textContent="Why Choose Us!"
  const chooseContent=document.createElement('h4')
  chooseContent.textContent=`Customers choose us because we combine delicious, freshly 
  prepared meals with warm, friendly service that makes every visit feel special. Great value, and a welcoming atmosphere that keeps guests coming back.`
  chooseContent.classList.add("chooseContent")
  const chooseContainer=document.createElement("div")
  chooseContainer.classList.add('Container')

  const visionContainer=document.createElement('div')
  visionContainer.classList.add('Container')
  const vision=document.createElement("h2")
  const visioncontent=document.createElement('h4')
  visioncontent.classList.add("visionContent")
  vision.textContent="Our Vision!";
  visioncontent.textContent=`Our vision is to become the most loved restaurant in our community —
   known for our outstanding food, friendly service, and a dining atmosphere that brings people together.`

  main.append(aboutContainer);
  aboutContainer.append(chooseContainer,missioncontainer,visionContainer,myname)
  chooseContainer.append(choose,chooseContent)
  missioncontainer.append(mission,missionContent)
  visionContainer.append(vision,visioncontent)

     setTimeout(()=>{
         aboutContainer.classList.add("show")
      },20)
}

