 let iconButtons=document.querySelectorAll(".iconContainer"),
      imageContainer=document.querySelector('#bottleImages'),
      beerDescription=document.querySelector(".beer-info");
 var button = document.querySelector("#button");
  var crownBurger = document.querySelector("#crownburger");

  const beerData=[
        [`Tyskie is the favorite beer of Poles and "Our Best" abroad. 
        As the only beer from Poland, Tyskie won a "beer oscar"- Grand 
        Prix at The British Brewing Industry Awards.In addition to malt,
         hops and water, the most important component of Tyski has always
         been brewers. `],
         [`Until the 19th century wheat beers were a specialty in Polish 
         lands. Inspired by these customs, brewers from Tyskie Prince's 
         Breweries created a recipe of Tyski Wheat, a lower fermentation 
         lager brewed with wheat malt. `],
          [` In 2011, Tyskie received the Gold Medal 
          du Monde Selection  International Institute for Quality Selections. `],
          [`Tyskie Pilsen is a nod to the Lagers of Pilsen brewed in Tychy 
         in the 1920s. of the last century. The former obitican method was
         used to make it more than 10 000 years ago. Plausiais is 
         characterized by a clear bitterness and a clear golden color. `],
         [`As the only Polish beer, twice won the "Beer Oscars" - Grand Prix
          at The British Brewing Industry Awards, the most prestigious beer
           competition in the world.`]
  ]

  function crownBurgerMenu() {
    crownBurger.classList.toggle("slideToggle");
    button.classList.toggle("expanded");
  }
 
 

 function animateBanners(){

  //clicking on the shield should trigger an animation
  // figure out how far the banners should move with simple math

    let offsetWidth=950;
    let multiplier= this.dataset.offset;
    let newPosition=offsetWidth*multiplier;
    //debugger;
    //change the style.right property to match the new position-where it needs to move to
    //right
    imageContainer.style.right=`${newPosition}px`;
     beerDescription.textContent = beerData[multiplier][0];
  } 
  button.addEventListener("click", crownBurgerMenu, false);

 iconButtons.forEach(button=>button.addEventListener("click",animateBanners));