const container = document.querySelector("#grid-container");

// Creation of the grid; should put this into its own function
let gridCount = 16;
let xGrid = Math.sqrt(gridCount);
let yGrid = 4;
let size = 400;

for (i = 0; i < gridCount; i++) {
	const gridColumn = document.createElement('div');
	gridColumn.className = `grid-${i}`;
	gridColumn.style['display'] = 'flex';

	gridColumn.style['flex'] = `1 0 ${(1 / xGrid * 100) - 1}%`;
	gridColumn.style['flex-wrap'] = 'wrap';
	gridColumn.style['padding'] = '0px';
	gridColumn.style['border'] = '0px';
	gridColumn.style['margin'] = '2px';
	// gridColumn.style['height'] = '100vh';
	gridColumn.style['background-color'] = 'green';
	container.append(gridColumn);

};

