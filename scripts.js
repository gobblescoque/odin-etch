function createGrid(nSide) {

	const gridCount = nSide ** 2;
	for (i = 0; i < gridCount; i++) {
		const gridColumn = document.createElement('div');
		gridColumn.className = `grid-${i}`;
		gridColumn.style.display = 'flex';

		gridColumn.style['flex-wrap'] = 'wrap';
		gridColumn.style.padding = '0px';
		gridColumn.style.border = '0px';
		gridColumn.style.margin = '0px';
		gridColumn.style.flex = `1 0 ${(1 / nSide * 100) - 0.001}%`; 
		gridColumn.style['background-color'] = 'gray';
		container.append(gridColumn);
	};

	for (i = 0; i < gridCount; i++) {
		const grid = container.querySelector(`.grid-${i}`);
		grid.addEventListener('mouseover', (event) => {
			const rgb = randRGB();
			r = rgb[0];
			g = rgb[1];
			b = rgb[2];
			event.target.style['background-color'] = `rgb(${r}, ${g}, ${b})`;
		})
	};
};

function randRGB() {
	const r = Math.round(Math.random() * 255);
	const g = Math.round(Math.random() * 255);
	const b = Math.round(Math.random() * 255);

	return [r, g, b]
};

const mainBody = document.querySelector('body');
const container = document.querySelector("#grid-container");

const buttonDiv = document.createElement('div');
buttonDiv.className = 'button-holder';
buttonDiv.style.display = 'flex'
buttonDiv.style['justify-content'] = 'center';
container.before(buttonDiv);

const button = document.createElement('button');
button.className = 'grid-size-button'
button.textContent = 'Change Grid Size';
buttonDiv.append(button);


const nSide = 4;
const nGrids = nSide ** 2;

createGrid(nSide);



button.addEventListener("click", (event) => {
	const inputGridSize = prompt("Enter desired number of grids (side):");
	const numCurrentGrids = container.childElementCount;

	for (i = 0; i < numCurrentGrids; i++) {
		const grid = document.querySelector(`.grid-${i}`);
		document.querySelector(`.grid-${i}`).remove();
	}

	createGrid(inputGridSize);

	// const newSize = parseInt(inputGridSize);
	// createGrid(newSize);
});

console.log(container.childElementCount);