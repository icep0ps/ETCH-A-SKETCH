const body = document.querySelector('body');
const buttonSections = document.getElementById('buttons')
const container = document.querySelector('.container')
const button = document.createElement('button')
const squareBtn = document.createElement('button')
const divBtn = document.createElement('div')
const colorBtn = document.createElement('button')
buttonSections.append(colorBtn)
colorBtn.innerText = 'Random Color'
buttonSections.append(button)
button.innerText='Clear Gird'
buttonSections.append(squareBtn)
squareBtn.innerHTML= 'Reset Grid Number(s)'
const div = document.createElement('div');
div.classList.add('GridContainer')
container.append(div)

var input = prompt('Enter the number of grids you want',0);

function gridmaker(){
var total = (input)**2;
for(x=0; x<total; x++){
    var grid = document.createElement('div');
    grid.classList.add('grid')
    document.getElementsByClassName('container')
    div.append(grid)
}
div.style.gridTemplateColumns = `repeat(${input}, minmax(0px, 1fr))`;
div.style.gridTemplateRows = `repeat(${input}, minmax(0px, 1fr))`;
const grids = document.querySelectorAll('.grid')
grids.forEach(function(gridd){
    gridd.addEventListener('mouseover', () => 
    gridd.className = ('hoverGrid' ))})
}

gridmaker()
    squareBtn.addEventListener('click', e => {
        input = prompt('Enter the number of grids you want',0)
        document.querySelectorAll('.grid').forEach(e => e.remove())
        document.querySelectorAll('.hoverGrid').forEach(e => e.remove())
        gridmaker()
})


function color(){
    var grids = document.querySelectorAll('.grid')
    grids.forEach(function(grid){
    grid.addEventListener('mousemove', e=> {
        var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        grid.style.backgroundColor = randomColor})
    })}
    
    colorBtn.addEventListener('click', e => {
        color()
    })

    button.addEventListener('click', e => {
        const grids = document.querySelectorAll('.grid')
        const usedgrids = document.querySelectorAll('.hoverGrid');
        usedgrids.forEach(function(useditem){
        useditem.className ='grid'
        grids.forEach(function(grid){
         grid.style.backgroundColor = 'white'
        grid.style.border= '1px solid rgba(0, 0, 0, 0.137)'
            
        })
    })})
    