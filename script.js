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



  
/*    let selectedArtwork =
      data.data[Math.floor(Math.random() * data.data.length)];
    console.log(selectedArtwork);
    imgTag.src = `https://www.artic.edu/iiif/2/${selectedArtwork.image_id}/full/843,/0/default.jpg`;
  });
}

displayImage(); */