/*
  List of all the images. "beeftips.jpg","brisket.jpg","ribeye.jpg","steak.jpg","clams.jpg","crabs.jpg","lobster.png","scallops.jpg","shrimp.jpg","tuna.jpg","flan.jpg","passionberry.jpeg","oreocup.jpg"
*/ 
//Challenge 1: Add the appropriate images to each array below from the list above.
//Challenge 2: Add appropriate prices for each food in their corresponding array.
//Challenge 3: Add appropriate titles for each food in their corresponding array.  Use the image names as a hint for the food title.
let meat_titles = ["Beef Tips"];
let meats = ["beeftips.jpg", "brisket.jpg", "ribeye.jpg", "steak.jpg"];
let meat_prices = [21.99, 21.99, 21.99, 21.99];
let seafood_titles = ["Clams"];
let seafood = ["clams.jpg", "crabs.jpg", "lobster.png", "scallops.jpg", "shrimp.jpg", "tuna.jpg"];
let seafood_prices = ["21.99, 21.99, 21.99, 21.99"];
let dessert_titles = ["Flan"];
let dessert = ["flan.jpg", "passionberry.jpeg","oreocup.jpg"];
let dessert_prices = ["21.99, 21.99, 21.99, 21.99"];

function init(){
  //Each food has its own output container
  let m = document.getElementById("meats");
  let s = document.getElementById("seafoods");
  let d = document.getElementById("desserts");
  let build = ``;
  //Challenge 4:  Build cards for the meats. Place the build in the meat container. 
  for(let i = 0; i < meats.length; i += 1){
    build += `<div>`;
    build += `     <h2>${ meat_titles[i] }</h2>`;
    build += `     <img src ="images/${meats[i]}>"`;
    build += `      <span>${meat_prices[i]}</span>`;
    build += `</div>`;
  }
  m.innerHTML = build;
  //Challenge 5:  Build cards for the seafoods. Place the build in the seafood container.
  for(let i = 0; i < seafood.length; i += 1){
    build += `<div>`;
    build += `     <h2>${ seafood_titles[i] }</h2>`;
    build += `     <img src ="images/${seafood[i]}">`;
    build += `      <span>${seafood_prices[i]}</span>`;
    build += `</div>`;
  }
  m.innerHTML = build;
  //Challenge 6:  Build cards for the desserts. Place the build in the dessert container.
   for(let i = 0; i < dessert.length; i += 1){
    build += `<div>`;
    build += `     <h2>${ dessert_titles[i] }</h2>`;
    build += `     <img src ="images/${dessert[i]}">`;
    build += `      <span>${dessert_prices[i]}</span>`;
    build += `</div>`;
  }
  m.innerHTML = build;
  /*Notes for Challenges 4 through 6:
      1) Each challenge requires its own for loop to build the output.
      2) You can reuse the build variable as long as you set it back to `` before each loop.
      3) Create a basic card with the title, image and price.
  */
}
