
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0


function increment() {
    count += + 1 // increment the count variable when the button is clicked
    countEl.textContent = count
}

function save() {
    let totalPassenger = count + " - "
    saveEl.textContent += totalPassenger
    //once clicked save but count change to 0 
   countEl.textContent = 0
   count = 0 
    
}






