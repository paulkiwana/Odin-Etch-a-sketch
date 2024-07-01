const newGridButton = document.getElementById('new-grid-button');
const container = document.querySelector('.container');
//const clearGridBtn = document.getElementById('clear-grid')
const heading = document.querySelector('.heading')
const hoverCountElement = document.querySelector('.hover-count');
const backBtn = document.getElementById("back-btn");
const hidden = document.querySelector(".hidden");


let squaresHoveredX = 0;
let squaresHoveredY = 0;
window.addEventListener("load", ()=>{
    heading.style.display = "block";
    container.innerHTML = '';
})

// new grid button logic
newGridButton.addEventListener('click',()=>{
 hidden.style.display = "block";
    const gridSize = prompt('Enter the number of squraes per side(max 100):',16);
   
    if(gridSize > 0 && gridSize <= 100){
        createGrid(gridSize);
        
    } else{
        alert('Invalid input. Please enter a number between 1 and 100.');
    }
    
   
})

//create grid function
const createGrid =(size) => {
//container.style.width = 'auto' 
//container.style.height = ''
heading.style.display = "none";
//sizeUpdate(size)
//create new grid
for(let i=0; i<size*size; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    //squareSize(size)
    square.style.width = `${Math.floor((480/size))}px`
    square.style.height = `${Math.floor((480/size))}px`
    
    square.addEventListener('mouseenter',()=>{
        //Randomise RGB values
        const randomR = Math.floor(Math.random()*256);
        const randomG = Math.floor(Math.random()*256);
        const randomB = Math.floor(Math.random()*256);
        square.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`


        //Progressive darkening effect
let currentOpacity = parseFloat(square.style.opacity) || 1;
currentOpacity -= 0.1;
square.style.opacity = currentOpacity.toString();
   
// increment squaresHoevered counters
squaresHoveredX++;
squaresHoveredY = Math.min(squaresHoveredY + 1, size); //cap at size 
	 hoverCountElement.style.display = "block"
hoverCountElement.textContent = `${squaresHoveredX} X ${squaresHoveredY}`
});

    container.appendChild(square);
}

}

/*clearGridBtn.addEventListener('click', ()=>{
   
    
});*/

backBtn.addEventListener("click", ()=>{
	heading.style.display = "block";
   container.innerHTML = ''
    hidden.style.display = "none";
hoverCountElement.style.display = "none";
squaresHoveredX = 0;
squaresHoveredY =0;
//createGrid(size)
})

//Update grid size
//container.style.width = `${(size/16) * (500)}px` 
//container.style.height = `${(size/16) * (500)}px`

// Update square size
/*const squares = container.querySelector('.square');
squares.forEach((square)=> {

    square.style.width = `${(16/size) * (26.25)}px`
    square.style.height = `${(16/size) * (26.25)}px`
    

})*/


//Initial grid creation
createGrid(16)
