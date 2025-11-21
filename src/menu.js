export const menu = () => {

  function importAll(r) {
    let images = {};
    r.keys().forEach((item) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context('./pictures', false, /\.(png|jpe?g|svg)$/)
  );

  const main = document.getElementById("main-content");
  main.classList.add("Foods");
  const section=document.createElement('section')
  const welcoming=document.createElement("h3")
  welcoming.classList.add("Mayidyables")
  section.classList.add("image-sec")
   const bigChickenContainer=document.createElement('div');
   bigChickenContainer.classList.add("food-container");

   const bargerContanier=document.createElement('div');
   bargerContanier.classList.add("food-container");

   const chipsContainer=document.createElement('div');
   chipsContainer.classList.add("food-container");

     const RiceContainer=document.createElement('div');
   RiceContainer.classList.add("food-container");

     const meatContainer=document.createElement('div');
   meatContainer.classList.add("food-container");

     const pizzaContanier=document.createElement('div');
   pizzaContanier.classList.add("food-container");

     const restaurantContainer=document.createElement('div');
    restaurantContainer.classList.add("food-container");

     const coldDrinkContainer=document.createElement('div');
   coldDrinkContainer.classList.add("food-container");

     const kfcContainer=document.createElement('div');
    kfcContainer.classList.add("food-container");

    const harryContainer=document.createElement('div');
    harryContainer.classList.add("food-container");

  const bargerPrice=document.createElement("h3");
  bargerPrice.classList.add("price");
  bargerPrice.textContent="Hot Barger @ Mk8,000";

  const bigChickenPrice=document.createElement("h3");
  bigChickenPrice.classList.add("price");
  bigChickenPrice.textContent="Chicken @ Mk7,000";

   const harryPrice=document.createElement("h3");
  harryPrice.classList.add("price");
  harryPrice.textContent="Harry dona @ Mk15,000";

   const kfcPrice=document.createElement("h3");
    kfcPrice.classList.add("price");
  kfcPrice.textContent="fried Chicken @ Mk20,000";

   const meatPrice=document.createElement("h3");
  meatPrice.classList.add("price");
  meatPrice.textContent="full Meat @ Mk25,000";

   const pizzaPrice=document.createElement("h3");
  pizzaPrice.classList.add("price");
  pizzaPrice.textContent="Pizza @ Mk10,000";

   const ricePrice=document.createElement("h3");
  ricePrice.classList.add("price");
  ricePrice.textContent="Rice @ Mk5,000";

   const coldDrinkPrice=document.createElement("h3");
  coldDrinkPrice.classList.add("price");
  coldDrinkPrice.textContent="Cold Drink @ Mk5,000";

   const restaurantPrice=document.createElement("h3");
  restaurantPrice.classList.add("price");
  restaurantPrice.textContent="Big Chill @ Mk10,000";

   const chipsPrice=document.createElement("h3");
  chipsPrice.classList.add("price");
  chipsPrice.textContent="Chips @ Mk5,000";

  
  const barger = document.createElement('img');
  const bigChicken= document.createElement('img');
  const harry = document.createElement('img');
  const kfc= document.createElement('img');
  const meat = document.createElement('img');
  const pizza = document.createElement('img');
  const rice = document.createElement('img');
  const coldDrink = document.createElement('img');
  const restaurant = document.createElement('img');
  const chips = document.createElement('img');


  barger.src = images["barger.jpg"]; 
  bigChicken.src = images["big chicken.jpg"]; 
  harry.src = images["harry dona.jpg"]; 
  kfc.src = images["madyo.png"]; 
  meat.src = images["meat.jpg"]; 
  pizza.src = images["pizza.jpg"]; 
  rice.src = images["Rice.jpg"];
  chips.src = images["chips.jpg"]; 
  restaurant.src=images["restaurant.jpg"]

        barger.classList.add("food")
        pizza.classList.add("food")
        rice.classList.add("food")
        meat.classList.add("food")
        bigChicken.classList.add("food")
        kfc.classList.add("food")
        harry.classList.add("food")
        chips.classList.add("food")
        restaurant.classList.add("food")
        bargerContanier.append(barger,bargerPrice)
        bigChickenContainer.append(bigChicken,bigChickenPrice)
        restaurantContainer.append(restaurant,restaurantPrice)
        harryContainer.append(harry,harryPrice)
        kfcContainer.append(kfc,kfcPrice)
        chipsContainer.append(chips,chipsPrice)
        meatContainer.append(meat,meatPrice)
        RiceContainer.append(rice,ricePrice)
        pizzaContanier.append(pizza,pizzaPrice)

        section.append(bargerContanier,bigChickenContainer,
        restaurantContainer,harryContainer,kfcContainer,chipsContainer,
        meatContainer,RiceContainer,pizzaContanier )
        main.append(section);
        setTimeout(()=>{
         section.classList.add("show")
      },20)
};
