const newGridButton = document.getElementById('new-grid-button');
const container = document.querySelector('.container');
const clearGridBtn = document.getElementById('clear-grid')
const heading = document.getElementById('.heading')
const hoverCountElement = document.querySelector('.hover-count');

let squaresHoveredX = 0;
let squaresHoveredY = 0;


// new grid button logic
newGridButton.addEventListener('click',()=>{
 
    const gridSize = prompt('Enter the number of squraes per side(max 100):',16);
    if(gridSize > 0 && gridSize <= 100){
        createGrid(gridSize);
    } else{
        alert('Invalid input. Please enter a number between 1 and 100.');
    }

})

//create grid function
const createGrid =(size) => {
container.innerHTML = "";


//create new grid
for(let i=0; i<size*size; i++){
    const square = document.createElement('div');
    square.classList.add('square');
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
hoverCountElement.textContent = `${squaresHoveredX} X ${squaresHoveredY}`
});
    
    container.appendChild(square);
}
}

clearGridBtn.addEventListener('click', ()=>{
    container.innerHTML = ''
})

//Update grid size
container.style.width = `${480/size}px`
container.style.height = `${480/size}px`

// Update square size
const squares = container.querySelector('.square');
squares.forEach((square)=> {
    square.style.width = `${480/size}px`
    square.style.height = `${480/size}px`

})

//Initial grid creation
createGrid(16)