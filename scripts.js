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
		gridColumn.style.opacity = '0%'
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

			// Changes opacity for each pass withe mouse
			const compStyles = window.getComputedStyle(grid);
			let currentOpacity = Number(compStyles.getPropertyValue("opacity"));

			if (currentOpacity < 1.0) {
				currentOpacity += 0.1
				grid.style.opacity = `${currentOpacity}`;				
			};

		});
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

// Button container
const buttonDiv = document.createElement('div');
buttonDiv.className = 'button-holder';
buttonDiv.style.display = 'flex';
buttonDiv.style['justify-content'] = 'center';
container.before(buttonDiv);

// Button for grid changing
const button = document.createElement('button');
button.className = 'grid-size-button'
button.textContent = 'Change Grid Size';
buttonDiv.append(button);

const nSide = 4;
const nGrids = nSide ** 2;

createGrid(nSide);

// Button event that clears and recreates grid
button.addEventListener("click", (event) => {
	let inputGridSize = prompt("Enter desired number of grids (side):");

	while (inputGridSize > 100) {
		inputGridSize = prompt("Enter desired number of grids (side):");
	};

	const numCurrentGrids = container.childElementCount;

	for (i = 0; i < numCurrentGrids; i++) {
		const grid = document.querySelector(`.grid-${i}`);
		document.querySelector(`.grid-${i}`).remove();
	};
	createGrid(inputGridSize);
});