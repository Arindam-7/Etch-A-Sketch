const body = document.querySelector("body");

/* const div1 = document.createElement("div");
body.appendChild(div1); */
const div1 = document.getElementById("container");

function squareNumber(number){
    return number**2;
}

// Creation of Grid

function gridCreation(argument){

    while(div1.firstChild){
        div1.removeChild(div1.lastChild);
    }

// Rows and Columns generation

    div1.style.gridTemplateRows = `repeat(${argument}, 1fr)`;
    div1.style.gridTemplateColumns = `repeat(${argument}, 1fr)`;    

    for (let i = 0; i < squareNumber(argument); i++){
        let div2 = document.createElement("div");

        div2.id = `square-div-${i}`;
        div2.classList.add("square-div");

        div2.addEventListener('mouseover', function(e){
            div2.style.backgroundColor = "black";
        });
        div1.appendChild(div2);
    }
}

document.getElementById("reset").addEventListener('click', resetGrid);
document.getElementById("clear").addEventListener('click', clearGrid);

function resetGrid(){
    let input = prompt("Enter the size of row (between 16 and 100)");
    
    if(!input)
     return;

    else if(typeof +input!== "number" || input < 16 || input >100)
     return resetGrid();

    else gridCreation(input);
}

function clearGrid(){
    let abc = Math.sqrt(document.getElementById("container").children.length);
    gridCreation(abc);
}

gridCreation(16);
