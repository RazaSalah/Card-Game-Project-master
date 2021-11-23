function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// variable
//for the heart level
const heart = document.getElementById("heart");
let heartCount = 3;
//for the moves
const moves = document.getElementById("moves");
let movesCount = 0;
//for the timer
const timer = document.getElementById("timer");
let time = 0;
let timerId = 0;
let timeout = true;
//for the restart icon , for restarting the game
const restart = document.getElementById("restart");
//for the cards
let CardsOpened = [];
const matchCards = [];

//functions
/*const startClock = () => {
  timeout = false;
  timerId = setInterval(() => {
    time++;
    timeupdate();
  }, 1000);
};

//this function update the timer values
// the first step is counting the minute and the second and then displaying the time

const timeupdate = () => {
  const min = Math.floor(time / 60);
  const sec = time % 60;

  if (sec < 10) {
    timer.innerHTML = min + ":0" + sec;
  } else {
    timer.innerHTML = min + ":" + sec;
  }
};

// stop and clear the timer by using the predefined function which is clearInterval
const stopClock = () => {
  clearInterval(timerId);
};

//moves function
const movesCounter = () => {
  movesCount++;
  moves.innerHTML = `${movesCount} moves`;
  if(movesCount==16){
    heartCount =2;
    
  }else if(movesCount==32){
    heartCount=1;
   
  }else if (movesCount== 48){
    heartCount = 0;
   
  }
}*/
//since we are having the event listener on the section we need to make sure that the click is valid only on the cards
//the cards set as valid when the array length is less than 2 + doesn't contain the match + there are no cards in the array + if the clicked contains the card class

function clickValidation(card) {
  if (
    CardsOpened.length < 2 &&
    card.classList.contains("card") &&
    !card.classList.contains("match") &&
    !CardsOpened.includes(card)) 
  {
    console.log(card);
    return true;
  } else 
  return false;
}
//we need an array to store the opened card , this array will be used to compare the match
function cardsArray(card) {
  CardsOpened.push(card);
}

function checkMatch() {
  if (
    CardsOpened[0].children[0].className == CardsOpened[1].children[0].className
  ) {
    CardsOpened[0].classList.add("match");
    CardsOpened[1].classList.add("match");
    CardsOpened = [];
  } else {
    console.log("error");
    //removing the open class and make the array empty , 1000 the time for the card to be flipped
    setTimeout(function RemoveOpen() {
      CardsOpened[0].classList.remove("open");
      CardsOpened[1].classList.remove("open");
      CardsOpened = [];
    }, 1000);
  }
}

// event listeners
//event target is the clicked element which is the card
//add an event listener to the deck where if the cards are opened we need to check
//whether the click is valid or not and then pass to the openCard array and the last step is check the matching
const cardsOpen = document.querySelector("#deck");
cardsOpen.addEventListener("click", function (event) {
  if (clickValidation(event.target)) {
    event.target.classList.add("open");
    cardsArray(event.target);
    if (CardsOpened.length == 2) {
      checkMatch();
    }
  }
  /*startClock();
  movesCounter();*/
});

/*restart.addEventListener("click", function (event) {
  stopClock();
  timeout = true;
  time = 0;
  movesCount = 0;
  timeupdate();
  movesCounter();
});*/
