function createGrid(gridCount) {

	const xGrid = Math.sqrt(gridCount);
	for (i = 0; i < gridCount; i++) {
		const gridColumn = document.createElement('div');
		gridColumn.className = `grid-${i}`;
		gridColumn.style.display = 'flex';

		gridColumn.style['flex-wrap'] = 'wrap';
		gridColumn.style.padding = '0px';
		gridColumn.style.border = '0px';
		gridColumn.style.margin = '0px';
		gridColumn.style.flex = `1 0 ${(1 / xGrid * 100) - 0.001}%`; 
		gridColumn.style['background-color'] = 'gray';
		container.append(gridColumn);
	};
};

function randRGB() {
	const r = Math.round(Math.random() * 255);
	const g = Math.round(Math.random() * 255);
	const b = Math.round(Math.random() * 255);

	return [r, g, b]
};

const container = document.querySelector("#grid-container");
const nSide = 64;
const nGrids = nSide ** 2;

createGrid(nGrids);

for (i = 0; i < nGrids; i++) {
	const grid = container.querySelector(`.grid-${i}`);
	grid.addEventListener('mouseover', (event) => {
		const rgb = randRGB();
		r = rgb[0];
		g = rgb[1];
		b = rgb[2];
		event.target.style['background-color'] = `rgb(${r}, ${g}, ${b})`;
	})
}

console.log(nGrids);