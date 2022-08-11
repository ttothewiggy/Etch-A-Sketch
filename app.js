sizeOfGrid = 100;
const container = document.querySelector('.container');

//nested for loops to make the grid

const createGrid = (amtOfGrids) => {
    for (let i = 0; i < amtOfGrids; i++){
        const row = document.createElement('div')
        row.classList.add('grid-row');
// within this loop the gridbox is given its style
// the size of the cubes is relative to the size of the box
        for (let j = 0; j < amtOfGrids; j++){
            const widthAndHeight = 960 / sizeOfGrid;
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.style.height = `${widthAndHeight}px`;

            //event listerner to hightlight the boxes
            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'black';
            });

            row.appendChild(gridBox);
        };

        container.appendChild(row);
    };
}

createGrid(sizeOfGrid);

