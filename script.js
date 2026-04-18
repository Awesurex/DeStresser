const addStresser = document.getElementById("addStresser");
const listOfStressers = document.getElementById("listOfStressers");
const nextPage = document.getElementById("nextPage");
const resetStressers = document.getElementById("resetStressers");
const createList = ()=>{

 const inputText = listProblems.value.trim();
    if(inputText.length <= 0){
        alert("You must write something in the text box");
        return false;
    } 
 
    // Creating p tag
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p); 
   
    listOfStressers.appendChild(li);
    listProblems.value = "";

    storeStressers(inputText)
}

// Store list of stressers to transfer
const storeStressers = (stresser)=>{
  let stressers;
  if(localStorage.getItem("stressers") === null){
        stressers = [];
  }
  else {
    stressers = JSON.parse(localStorage.getItem("stressers"));
  }
  stressers.push(stresser);
  localStorage.setItem("stressers", JSON.stringify(stressers));
}

const getLocalStressers = ()=>{
    let stressers;
    if(localStorage.getItem("stressers") === null){
        stressers = [];
    }
    else{
        stressers = JSON.parse(localStorage.getItem("stressers"));
        stressers.forEach(stresser => {

            // Creating p tag
            const li = document.createElement("li");
            const p = document.createElement("p");
            p.innerHTML = stresser;
            li.appendChild(p); 
   
            listOfStressers.appendChild(li);
            
        });
    }
}


document.addEventListener('DOMContentLoaded', getLocalStressers);
addStresser.addEventListener('click', createList);
resetStressers.addEventListener('click', function(){
    localStorage.clear();
});