const newGridButton = document.getElementById('new-grid-button');
const container = document.querySelector('.container');
const clearGridBtn = document.getElementById('clear-grid')

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
        square.classList.add('hovered')
    });
    
    container.appendChild(square);
}
}

clearGridBtn.addEventListener('click', ()=>{
    container.innerHTML = ''
})

//Update grid size
container.style.width = `${420/size}px`
container.style.height = `${420/size}px`

// Update square size
const squares = container.querySelector('.square');
squares.forEach((square)=> {
    square.style.width = `${420/size}px`
    square.style.height = `${420/size}px`

})

//Initial grid creation
createGrid(16);