/*----- constants -----*/ 
const drinkName = 
const drinkThumb =

const front = document.createElement("div")
const back = document.createElement("div") 

/*----- app's state (variables) -----*/ 
/*----- cached element references -----*/ 
/*----- event listeners -----*/ 

/*----- functions -----*/

function initialize(){

}
//create main render function that is responsible for rendering
//the state of the app to the DOM
function render() {

}

//store flashcard data in variable
let cocktailObj = fetch(
    `http://www.thecocktaildb.com/api/json/v1/1/random.php`
    )
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch(err => console.error(err))

//make class
  class Flashcard {
    constructor (front, back, strDrink, strDrinkThumb, specs, instructions){
        this.front = front;
        this.back = back;
        this.strDrink = strDrink;
        this.strDrinkThumb = strDrinkThumb;
        this.specs = specs;
        this.instructions = instructions;        
    }
}

//plug in data from variable into Flashcard class
let flashcardSpecs = Flashcard(cocktailObj.drinks[0].strDrink, strDrinkThumb, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strMeasure1, strMeasure2, strMeasure3, strMeasure4)

//populate DOM flashcard with info from  class object
let flashcard = document. querySelector('.flashcard')
flashcard.innerHTML= `<h1>${flashcardSpecs.strDrink}</h1>`

//to flip card, switch the contents of flashcard
//flashcard.innerHTML=`


DuckNotes:::
window.onload = function() {
  const body = document.body;

  console.log(body);
  function addDiv() {
    // create a new div element
    const newDiv = document.createElement("div");
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);