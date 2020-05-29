onload();

function buildGrid (rowLength = 16) {
     parent = document.getElementById("container");

     var div = document.createElement("DIV");
     document.getElementById("container").appendChild(div);
     div.innerHTML = "Hello World";

    while(parent.children.length) parent.removeChild(parent.children[0]);

    div.style.backgroundColor = "white";
    div.style.width = (100/rowLength) + "%";
    div.style.height = (100/rowLength) + "%"; 

    for (let i = 0; i < rowLength**2; i++){
        let clone = parent.cloneNode();
        clone.addEventListener('mouseover', function(){this.style.backgroundColor = "black";});
        parent.appendChild(clone);
    }
}

function onload(){
    buildGrid();
    document.getElementById("reset").addEventListener('click', resetGrid);
    document.getElementById("clear").addEventListener('click', clearGrid);
}

function resetGrid(){
    let input = prompt("Enter the size of row (between 16 and 100)");
    
    if(!input)
     return;

    if(typeof('input') !== "number" || input < 1 || input >100)
     return resetGrid();

    buildGrid(input);
}

function clearGrid(){
    let abc = Math.sqrt(document.getElementById("container").children.length);
    buildGrid(abc);
}