const CHECKBOX = "<button onclick='uncrossItem(this)'><svg viewBox='0 0 512 512' width='15' title='check-circle' style='fill: blue'> <path d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z' /></svg></button>";
const UNCHECKBOX = "<button onclick='crossItem(this)'><svg viewBox='0 0 448 512' width='15' title='square'><path d='M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z' /></svg></button>";
let itemInput = document.getElementById("item-input");
let list = document.getElementById("list");
if (document.cookie !="") loadItems();

  //itemInput.focus;


document.addEventListener("keydown", (key) => {
  console.log(key.code)
  if (key.code == "Enter") addItem(key)
    
});

document.addEventListener("beforeunload", (event) => (saveItems));


function addItem(event){
  if (itemInput.value !="") {
      let _newItem = itemInput.value;
      let _elem = document.createElement("li");
    _elem.innerText = _newItem;
    _elem.innerHTML = UNCHECKBOX + _elem.innerHTML;
      list.append(_elem);
      itemInput.value = "";
      itemInput.focus;
  }
};

function clearAll(event){
  list.innerHTML = "";
};

function crossItem(elem){
  let parentLI = elem.parentElement;
  parentLI.style.textDecoration = "solid blue 0.1rem   line-through";
  parentLI.style.color = "black";
  parentLI.innerHTML = CHECKBOX + parentLI.innerText;
  }

function uncrossItem(elem){
   let parentLI = elem.parentElement;
   parentLI.style.textDecoration ="none";
   parentLI.style.color = "purple";
   parentLI.innerHTML = UNCHECKBOX + parentLI.innerText;
}


function saveItems(){
  document.cookie = "items=" + list.innerHTML;
  console.log(documnet.cookie);
}

function loadItems(){
  cookieArr = document.cookie.substring(6);
  list.innerHTML = cookieArr;
}
  
