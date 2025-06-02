const inputBox = document.getElementById("input-box");
const listContain = document.getElementById("list-holder");

function addTodo(){
    if(inputBox.value === ''){
        const error = document.querySelector("input");
        inputBox.classList.add("error");
        error.placeholder = "This Field is required";
    }
    else{
        inputBox.classList.remove("error");
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContain.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}


listContain.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);



inputBox.addEventListener("keydown", function insert(event){
    if(event.key === "Enter"){
        addTodo();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data", listContain.innerHTML);
}

function showTask(){
    // listContain.innerHTML = localStorage.getItem("data");
    const data = localStorage.getItem("data");
    localStorage.getItem("data");
    if(data){
        listContain.innerHTML = data;
    }
}
showTask();
