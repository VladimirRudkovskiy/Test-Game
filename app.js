document.addEventListener('DOMContentLoaded', () => {
	const grid = document.querySelector('.grid')
	const width = 8
	const squares = []

	const squareColors = [
		'red',
		'yellow',
		'orange',
		'purple',
		'green',
		'blue'
	]


	// Создание поля
	function createBoard() {
		for (let i = 0; i < width*width; i++) {
			const square = document.createElement('div')
			let randomColor = Math.floor(Math.random() * squareColors.length)
			square.style.backgroundColor = squareColors[randomColor]
			grid.appendChild(square)
   	  squares.push(square)


		}
	}
	createBoard()

})