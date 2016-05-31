"use strict";
var extractorCore = require('./CoreExtractor');

extractorCore.extract("http://www.submarino.com.br/sublinha/271615/informatica/armazenamento/drives-e-gravadores?ofertas.limit=200&ofertas.offset=0",function(){
    var products = [];
	$('.products-area').find('article.single-product').each(function(index){
		var product = {};
		product.category = 'driver';
		product.title = $(this).find('.top-area-product').find('a').attr('title');
		product.link = $(this).find('.top-area-product').find('a').attr('href');
		product.img = $(this).find('.productImg').find('img').attr('src');
		product.price = $(this).find('.sale.price').find('strong').text().trim();

		products.push(product);
	});
    
    return products;
});


