var lidos = document.getElementById('lidos')
var paraLer = document.getElementById('paraLer')

var require = new XMLHttpRequest();
require.open("GET", "livros.json", true);
require.onload = function() {
  var book = JSON.parse(this.responseText);
  // Livros lidos
	for (var i = 0; i < book.lidos.length; i++) {

		var livro = document.createElement('div')
		livro.classList.add('livro')
		lidos.appendChild(livro)

		var capa = document.createElement('img')
		capa.classList.add('livro-capa')
		capa.src = book.lidos[i].capa
		capa.alt = 'Capa do livro "' + book.lidos[i].titulo + '"' 
		livro.appendChild(capa)

		var titulo = document.createElement('h3')
		titulo.classList.add('livro-title')
		titulo.innerHTML = book.lidos[i].titulo
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