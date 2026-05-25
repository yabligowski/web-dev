
let gameOverDiv = document.getElementById("game-over");
let winnerText = document.querySelector("#game-over p");
let squareArr = document.querySelectorAll(".ttt-square");
let currentPlayer = "X";


// console.log(squareArr);

for(const elem of squareArr){
  elem.addEventListener("click", (event) => drawSymbol(event));
};

function drawSymbol(event){
let clickedSquare = event.target;
  
if (clickedSquare.innerText =="")clickedSquare.innerText+= ((currentPlayer=0) ? "X": "O"); 
  if (checkForWinner() == false) checkForDraw();
 changePlayer();
  }
  
};


function checkForWinner() {
  let isGameOver = false;
  
  for ( let i = 0; i<3; i++){
     if (squareArr[3 * 1].innerText == currentPlayer
         && squareArr[3 * i +1].innerText == currentPlayer
         && squareArr[3 * i + 2].innerText == currentPlayer) isGameOver = true;
    }
  
   for (let i = 0; i<3; i++){
    if(squareArr[i].innerText == currentPlayer
      && squareArr[i+3].innerText == currentPlayer
      && squareArr[i+6].innerText == currentPlayer) isGameOver = true;
   }
     
    
   if  (squareArr[0].innerText == currentPlayer
   && squareArr[4].innerText == currentPlayer
   && squareArr[8].innerText == currentPlayer) isGameOver = true;
  
  else if (squareArr[2].innerText == currentPlayer
          && squareArr[4].innerText == currentPlayer
          && squareArr[6].innerText == currentPlayer) isGameOver = true;
  
  if (isGameOver) {
showWinner();
}
  return isGameOver;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  function showWinner(){
    gameOverDiv.style.display = "block";
    winnerText.innerText = currentPlayer + "Player has won!";
  }
  
  
  function checkForDraw(){
    let isDraw = true;
    
    for (const elem of squareArr){
     if (elem.innerText=="") isDraw = false;
    }
    
    if (isDraw) showDraw();
   
    function showDraw(){
    gameOverDiv.style.display = "block";
    winnerText.innerText = "No one wins...";
    }
  }
  
  
 function changePlayer(){
   currentPlayer = 1 - currentPlayer;
 currentPlayer = ((currentPlayer=="X") ? "O":"X");
}
  
  
  
  
  
}

function resetGame(){
 gameOverDiv.style.display = "none";
  
  for (const elem of squareArr){
    elem.innerText = "";
 }
}
