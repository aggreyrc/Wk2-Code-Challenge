document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let input = document.querySelector("input").value.trim()
        if(input === ""){
            alert("Please enter an item");
            return;
        };
        handleCreateItem(input);
        form.reset();
    });
        //Creating the clear list button
    let clearbtn = document.createElement("button");
    clearbtn.textContent = "Clear List";
    clearbtn.type = "button";
    let clearList = document.getElementById("create-shopping-list");
    clearList.appendChild(clearbtn);

        // Add styles to clearbtn
    clearbtn.style.backgroundColor = "#4CAF50";
    clearbtn.style.color = "#fff";
    clearbtn.style.border = "none";
    clearbtn.style.padding = "5px 10px";
    clearbtn.style.cursor = "pointer";

    
    clearbtn.addEventListener("click", () => {
        let list = document.getElementById("shopping-list");
        list.innerHTML = "";
    });
});

        //Creating The Shopping List Items
function handleCreateItem(item) {
    let li = document.createElement("li");
    let list = document.getElementById("shopping-list");
    li.textContent = `${item} `;
    list.appendChild(li);

        //creating mark as puchased button 
    let markbtn = document.createElement("button");
    markbtn.textContent = "Mark as purchased";
    markbtn.type = "submit";
    li.appendChild(markbtn);

        ////creating Edit button 
    let editbtn = document.createElement("button");
    editbtn.textContent = "Edit Item";
    editbtn.type = "submit";
    li.appendChild(editbtn);
   
    markbtn.addEventListener("click", () => {
        li.style.textDecoration = "line-through";
        markbtn.disabled = true;
        markbtn.style.backgroundColor = "gray";
    });

    editbtn.addEventListener("click", () => {
        let newInput = prompt("Enter new item:");
        if (newInput) {
            li.textContent = `${newInput} `;
            li.appendChild(markbtn);
            li.appendChild(editbtn);
        }
    });
}



