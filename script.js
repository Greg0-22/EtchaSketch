const container = document.querySelector(".container");
const createGrid = (number) => {
    for (let i = 0; i < number; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        container.append(row);

        container.appendChild(row);
    }
    
};

createGrid(16);