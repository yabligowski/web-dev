 let topDiv = document.getElementById("top-div");

let botDiv = document.getElementById("bot-div");

let isOn = true;


function switchmode(event) { 
  
  
  //Change background color to black if light mode, else white
 if (isOn) document.body.style.backgroundColor="black";
  else document.body.style.backgroundColor="white";
 
  
  //Change text color to white if light mode, else black
  if (isOn) document.body.style.color = "white";
    else document.body.style.color = "black"; 
  
   //Change text to "dark mode on" if light mode, else "dark mode off"
  if (isOn) botDiv.innerHTML = "<p>dark mode on</p>";
    else botDiv.innerHTML = "<p>dark mode off</p>";
  
  
  //Flip the isOn switch
              isOn = !isOn;            }









