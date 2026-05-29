

let queryParams = new URLSearchParams(window.location.search);
const P1_NUM_STRATS = queryParams.get("p1NumStrats");
const P2_NUM_STRATS = queryParams.get("p2NumStrats");
const PAYOFF_CONTENTS = "(<input type='number'>,<input type='number'>)";


buildMatrix();

function buildMatrix() {
 let matrix = document.getElementById("matrix");
  
  
  //Loop (P1_STRATS + 1) number of times. create a row div each iteration
  for (let i = 0; i < (P1_NUM_STRATS + 1); i++) {
    //Create a row div
    let newRow = document.createElement("div");
    newRow.classList.add("matrix-row");
    matrix.append(newRow);  
    
    //Loop (P2_STRATS + 1) number times. Create a cell dic each iteration
    for ( let j = 0; j < (P2_NUM_STRATS + 1); j++) {
      //Create a cell div
      let newCell = document.createElement("div");
      if (i==0 && j==0){
        newCell.classList.add("empty-cell");
      
      } else if (i == 0) {
        newCell.classList.add("strat-cell");
        newCell.innerHTML= "t<sub>"+j+"</sub>";
      
      } else if (j == 0) {
        newCell.classList.add("strat-cell");
        newCell.innerHTML= "s<sub>"+i+"</sub>";
      
      } else  {
        newCell.classList.add("payoff-cell")
        newCell.innerHTML = PAYOFF_CONTENTS;
      }
      newRow.append(newCell);
    }
  }
}

function randomize(){
  let payoffArr= document.querySelectorAll("input");
  const MIN = -5;
  const MAX = 15;    
  
  for (const elem of payoffArr){
    elem.value = Math.floor(Math.random()*(MAX + 1 -MIN)+MIN);
  }
}

function compute(){
  let p1PayArr = document.querySelectorAll(".payoff-cell input:first-child");
  let p2PayArr = document.querySelectorAll(".payoff-cell input:last-child");
  let payCellArr = document.querySelectorAll(".payoff-cell");
  
  for (const elem of payCellArr){
    if(elem.classList.contains("eliminated") == true) elem.classList.remove("eliminated");
    if(elem.classList.contains("ne") == true) elem.classList.remove("ne");
  }
  
  //loop through every column,finding p1's highest payoff out of the rows
  for(let j=0; j < P2_NUM_STRATS; j++){
    let largest = -Infinity;
    
    //identify the highest payoff in this column
    for(let i = 0; i< P1_NUM_STRATS; i++){
      if(Number(p1PayArr[P2_NUM_STRATS*i + j].value) > Number(largest)) largest = p1PayArr[P2_NUM_STRATS*i + j].value;
    }
    
    //eliminate any cells which arent best responses
     for(let i = 0; i< P1_NUM_STRATS; i++){
      if(Number(p1PayArr[P2_NUM_STRATS*i + j].value) != Number(largest)) payCellArr[P2_NUM_STRATS*i + j].classList.add("eliminated");
    }
    
  }
  
 
  //loop through every row, finding p2's hightest payoff out of the columns
  
  for(let i=0; i < P1_NUM_STRATS; i++){
    let largest = -Infinity;
    
    //identify the highest payoff in this column
    for(let j = 0; j< P2_NUM_STRATS; j++){
      if(Number(p2PayArr[P2_NUM_STRATS*i + j].value) > Number(largest)) largest = p2PayArr[P2_NUM_STRATS*i + j].value;
    }
    
    //eliminate any cells which arent best responses
     for(let j = 0; j< P2_NUM_STRATS; j++){
      if(Number(p2PayArr[P2_NUM_STRATS*i + j].value) != Number(largest)) payCellArr[P2_NUM_STRATS*i + j].classList.add("eliminated");
    }
    
  }
  
  //give ne class to any cells which are best response for both players
  for(const elem of payCellArr){
    if(elem.classList.contains("eliminated") == false ) elem.classList.add("ne");
  }
  
}



