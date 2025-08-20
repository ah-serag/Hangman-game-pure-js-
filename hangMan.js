// select div letters

let letters = document.querySelector(".letters");
let letterDiv = document.querySelector(".Div-letters");

let DivSpace = document.querySelector(".spaceWord");
//
let divDraw = document.querySelector(".Div-draw");

// create letters

let Myletters = "abcdefghijklmnopqrstuvwxyz";

let ArrayLetters = Array.from(Myletters);

//create span letter

ArrayLetters.forEach((ele) => {
  // create span
  let spanLetter = document.createElement("span");
  // text span
  let textSpan = document.createTextNode(ele);
  // append text
  spanLetter.appendChild(textSpan);

  // add span to div letters
  letterDiv.appendChild(spanLetter);
});

// select spanLetter
let spanLetter = document.querySelectorAll(".Div-letters span");

// word object
const words = {
  programming: [
    "php",
    "javascript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python",
  ],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  people: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma Ghandi",
  ],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};

// global
let wrongAttemp = 0;

// select All key
let allKey = Object.keys(words);
// chosse random Key
let NumRandomKey = Math.floor(Math.random() * allKey.length);
// choose key
let ChoosseKey = allKey[NumRandomKey];

////////

// select arrayObject
let NumRandomArray = Math.floor(Math.random() * words[ChoosseKey].length);
// slect word
let word = words[ChoosseKey][NumRandomArray];

// add catagoery

document.querySelector(".game-categoery span").innerHTML = `${ChoosseKey}`;
document.querySelector(".letters h1").innerHTML = `${ChoosseKey}`;

//
//

// add span to spacWord
let ArrayWord = Array.from(word.toLowerCase());

// let spaceWord ;

ArrayWord.forEach((ele) => {
  let spanWord = document.createElement("span");

  DivSpace.append(spanWord);

  if (ele === " ") {
    spanWord.className = "space";
  }
});

//
let MyspanSpace = document.querySelectorAll(".spaceWord span");

let MyrightChoosen =[] ;


// when click letter

spanLetter.forEach((ele) => {
  //
  ele.addEventListener("click", () => {
    // CREATE STatus
    let STatus = false;

    ele.classList.add("clicked");
    let MyclickedLetter = ele.innerHTML.toLowerCase();
    // check clicked wight word demonded
    ArrayWord.forEach((let, index) => {

      if (MyclickedLetter == let.toLowerCase()) {
        MyspanSpace[index].innerHTML = `${MyclickedLetter.toUpperCase()}`;
        STatus = true;

        
      }
    });

    // outside loop
    if (STatus != true) {
      wrongAttemp++;
      divDraw.classList.add(`Wrong-${wrongAttemp}`);

      if (wrongAttemp == 9) {
        letterDiv.classList.add("Finished");
        EndGame()
      }
    }
// check answer
checkAnswer(MyspanSpace , wrongAttemp)
  


  });
});


//End game
function EndGame (){

// selected Eelment 
let divWrong = document.querySelector(".wrongDiv")
let wordRight = document.querySelector('.rightWord')
divWrong.style.display = "flex"
wordRight.innerHTML =`[${word}]`
//
document.querySelector('.btnFinish').onclick = ()=>{window.location.reload()}
 

}



function checkAnswer (spans ,wrongAttemp){
let Array = [];  
spans.forEach((span , index) =>{

Array.splice(index , 0 , span.innerHTML.toLowerCase())

})

//
ArrayWord.forEach((ele)=>ele.toLowerCase())
//////
if( wrongAttemp < 9  && Array.toString() == ArrayWord.toString()){

FinishWin(wrongAttemp)

}

}


// function Win 


function FinishWin(wrongAttemp){
// 
let WinDiv = document.querySelector(".WinDiv")
WinDiv.style.display="flex"
//
document.querySelector('.WinDiv .btnFinish').onclick = ()=>{window.location.reload()}
//
document.querySelector('.WinDiv h3 .NumWrong').innerHTML = `${wrongAttemp}`
    


}


