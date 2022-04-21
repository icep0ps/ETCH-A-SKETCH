const body = document.querySelector('body');
const container = document.querySelector('.container')
const div = document.getElementById('grid-container');

let input = prompt('Enter the number of grids you want', 0);

function gridmaker() {
    let total = (input) ** 2;
    for (x = 0; x < total; x++) {
        let grid = document.createElement('div');
        grid.classList.add('grid')
        document.getElementsByClassName('container')
        div.append(grid)
    }
    div.style.gridTemplateColumns = `repeat(${input}, minmax(0px, 1fr))`;
    div.style.gridTemplateRows = `repeat(${input}, minmax(0px, 1fr))`;
    const grids = document.querySelectorAll('.grid')
    grids.forEach(function (gridd) {
        gridd.addEventListener('mouseover', () =>
            gridd.className = ('hoverGrid'))
    })
}

gridmaker()

function rest() {
    input = prompt('Enter the number of grids you want', 0)
    document.querySelectorAll('.grid').forEach(e => e.remove())
    document.querySelectorAll('.hoverGrid').forEach(e => e.remove())
    gridmaker()
}


function color() {
    let grids = document.querySelectorAll('.grid')
    grids.forEach(function (grid) {
        grid.addEventListener('mousemove', e => {
            let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            grid.style.backgroundColor = randomColor
        })
    })
}


function clearGrid() {

    document.querySelectorAll('.grid').forEach(e => e.remove())
    document.querySelectorAll('.hoverGrid').forEach(e => e.remove())
    gridmaker()

}
