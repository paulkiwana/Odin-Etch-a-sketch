const container = document.querySelector('.container');
for(let i = 0; i < 256; i++){
const square = document.createElement('div');
square.classList.add('square');
square.addEventListener('mouseenter',()=>{
    square.classList.add('hovered')
});
square.addEventListener('mouseleave', ()=>{
    square.classList.remove('hovered')
})
container.appendChild(square);
}