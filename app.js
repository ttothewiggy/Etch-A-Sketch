let sizeOfGrid = 50;
const container = document.querySelector('.container');
const resetButton = document.querySelector('button');

//nested for loops to make the grid

const createGrid = (amtOfGrids) => {
    // const wrapper = document.createElement('div');
    // wrapper.classList.add('wrapper');

    for (let i = 0; i < amtOfGrids; i++){
        const row = document.createElement('div')
        row.classList.add('grid-row');
// within this loop the gridbox is given its style
// the size of the cubes is relative to the size of the box
        for (let j = 0; j < amtOfGrids; j++){
            const widthAndHeight = 960 / amtOfGrids;
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.style.height = `${widthAndHeight}px`;

            //event listerner to hightlight the boxes
            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'black';
            })
            row.appendChild(gridBox);
        }

        container.appendChild(row);
    }
    // container.appendChild(wrapper);
}



//button to reset grid
resetButton.addEventListener('click', () => {
    const userSize = Number(prompt('What dimensions do you want for the grid?'));

    while (userSize > 100) {
        userSize = Number(prompt('Pick again, has to be less than 100. '));
    }
    
    // const wrapper = document.querySelector('.wrapper');

    // if(!wrapper){
    //     createGrid(userSize);

    // }else {
    //     wrapper.remove();

    // }

    
})

// createGrid(sizeOfGrid);

