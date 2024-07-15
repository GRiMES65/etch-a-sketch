const GRIDDIMENSIONS = 600;
let rows = 16;
let cols = 16;

const container = document.querySelector("#container");
container.style.width = `${GRIDDIMENSIONS}px`;
container.style.height = `${GRIDDIMENSIONS}px`

function hoverEffect() {
    this.style.backgroundColor = "black";
} 

function gridGen(){
    for (i=0; i < (rows * cols); i++){

        const grids = document.createElement("div");

        grids.style.width = `${(GRIDDIMENSIONS / cols) - 2}px`;
        grids.style.height = `${(GRIDDIMENSIONS / rows) - 2}px`;
        grids.classList.add("cells");

        container.appendChild(grids);

        grids.addEventListener("mouseover", hoverEffect);
    }
    
}

gridGen();
