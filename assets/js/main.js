var lendoAgora = document.getElementById('lendoAgora')
var seven = document.getElementById('2017')
var eight = document.getElementById('2018')
var paraLer = document.getElementById('paraLer')

var require = new XMLHttpRequest();
require.open("GET", "livros.json", true);
require.onload = function() {
	var book = JSON.parse(this.responseText);
  for (var i = 0; i < book.lendoAgora.length; i++) {

		var capa = document.createElement('img')
		capa.classList.add('lendoAgora-capa', 'livro-capa')
		capa.src = book.lendoAgora[i].capa
		capa.alt = 'Capa do livro "' + book.lendoAgora[i].titulo + '"' 
		lendoAgora.appendChild(capa)

		var boxLendoAgora = document.createElement('div')
		boxLendoAgora.classList.add('lendoAgora-text')
		lendoAgora.appendChild(boxLendoAgora)

		var titulo = document.createElement('h3')
		titulo.classList.add('lendoAgora-titleBook')
		titulo.innerHTML = book.lendoAgora[i].titulo
		boxLendoAgora.appendChild(titulo)

		var description = document.createElement('p')
		description.classList.add('lendoAgora-description')
		description.innerHTML = book.lendoAgora[i].description
		boxLendoAgora.appendChild(description)
	}
	// Livros lidos
	
	// 2018
	for (var i = 0; i < book.lidos.eight.length; i++) {

		var livro = document.createElement('div')
		livro.classList.add('livro')
		eight.appendChild(livro)

		var capa = document.createElement('img')
		capa.classList.add('livro-capa')
		capa.src = book.lidos.eight[i].capa
		capa.alt = 'Capa do livro "' + book.lidos.eight[i].titulo + '"' 
		livro.appendChild(capa)

		var titulo = document.createElement('h3')
		titulo.classList.add('livro-title')
		titulo.innerHTML = book.lidos.eight[i].titulo
		livro.appendChild(titulo)
	}

	// 2017
	for (var i = 0; i < book.lidos.seven.length; i++) {

		var livro = document.createElement('div')
		livro.classList.add('livro')
		seven.appendChild(livro)

		var capa = document.createElement('img')
		capa.classList.add('livro-capa')
		capa.src = book.lidos.seven[i].capa
		capa.alt = 'Capa do livro "' + book.lidos.seven[i].titulo + '"' 
		livro.appendChild(capa)

		var titulo = document.createElement('h3')
		titulo.classList.add('livro-title')
		titulo.innerHTML = book.lidos.seven[i].titulo
		livro.appendChild(titulo)
	}
	

	// Livros para ler
	for (var i = 0; i < book.paraLer.length; i++) {

		var livro = document.createElement('div')
		livro.classList.add('livro')
		paraLer.appendChild(livro)

		var capa = document.createElement('img')
		capa.classList.add('livro-capa')
		capa.src = book.paraLer[i].capa
		capa.alt = 'Capa do livro "' + book.paraLer[i].titulo + '"' 
		livro.appendChild(capa)

		var titulo = document.createElement('h3')
		titulo.classList.add('livro-title')
		titulo.innerHTML = book.paraLer[i].titulo
		livro.appendChild(titulo)
	}
};
require.send();