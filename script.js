let flashcard = document.querySelector(".flashcard");
let flipButton = document.querySelector(".button-flip");
let wahButton = document.querySelector(".button-wah");
let studyButton = document.querySelector(".button-cache")
let drinks = [];
let drinkIndex = 0;

//make class
class Flashcard {
  constructor(name, image, ingredients, measurements, instructions) {
    this.name = name; // String
    this.image = image; // String
    this.ingredients = ingredients; // Array of Strings
    this.measurements = measurements; // Array of Strings
    this.instructions = instructions; // String
  }
}
//Much thanks to Danny Yu for following "patch" over CORS Error
async function fetchDrink() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const apiUrl = 'http://www.thecocktaildb.com/api/json/v1/1/random.php';
  try {
  
       const response = await fetch(proxyUrl + apiUrl) 
       const data = await response.json();
    
       //vars rendered from data
       let drink = data.drinks[0];
       let ingredients = [];
       let measurements = [];
 
       //loop will only run where there is data contained within vars ingredients and measurements, which varies
       //harvests data from API object, now it's ours
       for (let i = 1; i <= 15; i++) {
         if (drink[`strIngredient${i}`] !== null) {
           ingredients.push(drink[`strIngredient${i}`]);
           measurements.push(drink[`strMeasure${i}`]);
         }
       }
 
       let flashcardSpecs = new Flashcard(
         drink.strDrink, // name
         drink.strDrinkThumb, // image
         ingredients, // Array of Ingredients
         measurements, // Array of Measurements
         drink.strInstructions
       );
 
       drinks.push(flashcardSpecs);
 
       displayDrink();
       console.log({data});
    } catch (error) {
       console.log(error);
        }

        //plug in data from variable into Flashcard class
      }

fetchDrink();

function displayDrink() {
  //populate DOM flashcard with info from  class object
  flashcard.style.backgroundImage = `url(${drinks[drinkIndex].image})`;
  flashcard.innerHTML = `<h1 style ='color: white;'>${drinks[drinkIndex].name}</h1>`;
}

flipButton.addEventListener("click", () => {
  // Get all Ingredients and Measurements
  let drink = drinks[drinkIndex]
  let ingredientsString = ''
  let measurementsString = ''

  drink.ingredients.forEach(ingdredient => {
    ingredientsString += `<p style ='color: white;'>${ingdredient}</p>`
})

drink.measurements.forEach(measurement => {
    measurementsString += `<p style ='color: white;'>${measurement}</p>`
})

  flashcard.innerHTML = `
    <h4 style ='color: white;'>${drink.instructions}</h4>
    <h3 style ='color: white;'>Ingredients: </h3>
    ${ingredientsString}
    <h3 style ='color: white;'>Measurements: </h3>
    ${measurementsString}
    `;
});


//to flip card, switch the contents of flashcard
//flashcard.innerHTML=`
wahButton.addEventListener("click", () => {
    drinkIndex++
    fetchDrink()
})

//cache functionality
function cache() {
    form.innerHTML = `<p>${drinks[drinkIndex].name}</p>`
}
studyButton.addEventListener("click", () => {
    cache()
    console.log(cache)
})