$(function() {

	let largura = $('#inputWeight'); //coluna
	let altura = $('#inputHeight'); //row
	let botao = $('input[type="submit"]'); //botao enviar
	let cor = $('#colorPicker'); //paleta de cores
	let tabela = $('#pixelCanvas'); //tabela

	botao.on('click', function(e) {
		tabela.children('tbody').remove(); //remover a tabela antiga
		makeGrid(largura, altura, tabela); //construir a nova tabela
		e.preventDefault(); //nao dar reload na pagina
	});
	
	//alterar a cor de cada celula da tabela clicada
	tabela.on('click', 'td', function() {
		$(this).css({
			backgroundColor: cor.val() //passar o valor da cor selecionada
		});
	});

	//funcao para montar a tabela
	function makeGrid(largura, altura, tabela) {
		let tableBody = tabela.append('<tbody></tbody>');
		for(let linha = 1; linha <= altura.val(); linha++) {
			tableBody.append('<tr></tr>');
		}
		for(let coluna = 1; coluna <= largura.val(); coluna++) {
			tableBody.find('tr').append('<td></td>');
		}
	}

});

