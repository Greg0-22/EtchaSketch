let color = 'black';
let click = true;

function createGrid(size) {
    let gridboard = document.querySelector('.gridboard');
    let squares = gridboard.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    gridboard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridboard.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'gray';
        gridboard.insertAdjacentElement('beforeend', square);
    }
}

createGrid(16);

function changeSize(input) {
    if(input >=2 && input <= 100) {
        createGrid(input);
    } else {
        console.log('Invalid. Input must be between 2 and 100.');
    }
}

function colorSquare() {
    if (click) {
        if(color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }  
}

function changeColor(choice) {
    color = choice;
}

function resetGrid() {
    let gridboard = document.querySelector('.gridboard');
    let squares = gridboard.querySelectorAll('div');
    squares.forEach((div) => (div.style.backgroundColor = 'gray'));
}

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.tagName != 'BUTTON') {
        click = !click;
        if(click) {
            document.querySelector('.mode').textContent = "Mode: Coloring On"
        } else {
            document.querySelector('.mode').textContent = "Mode: Coloring Off"
        }
    }

})