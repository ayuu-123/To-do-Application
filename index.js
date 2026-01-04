const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask(){
    if (inputbox.value===''){
        alert("add some text");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputbox.value;
        
        // Create delete button
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // × symbol
        span.className = "delete-btn";
        span.onclick = function() {
            li.remove();
        };
        
        li.appendChild(span);
        listcontainer.appendChild(li);
        inputbox.value = '';
        
        // Add click event to toggle checked state
        li.onclick = function(e) {
            if (e.target !== span) {
                li.classList.toggle("checked");
            }
        };
    }
}