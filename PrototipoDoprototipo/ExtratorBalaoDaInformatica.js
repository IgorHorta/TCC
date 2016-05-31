"use strict";
var extractorCore = require('./CoreExtractor');

extractorCore.extract("http://www.balaodainformatica.com.br/produtos//hardware/ssds",function(){
    var products = [];
	$('#listaProdutos').find('.produtos-box').each(function(index){
		var product = {};
		product.category = 'ssd';
		product.title = $(this).find('.nome').text();
		product.link = $(this).find('a').attr('href');
		product.img = $(this).find('.imagem').find('img').attr('data-original');
		product.price = $(this).find('.preco').find('strong:first').text();

		products.push(product);
	});
    
    return products;
});


