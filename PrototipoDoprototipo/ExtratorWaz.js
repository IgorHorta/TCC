"use strict";
var extractorCore = require('./CoreExtractor');

extractorCore.extract("http://www.waz.com.br/hardware/placa-mae?offset=60&paging=60&showAll=true",function(){
    var products = [];
	$('.product').each(function(index){
		var product = {};
		product.category = 'placa mãe';
		product.title = $(this).find('.title').text();
		product.link = $(this).find('a').attr('href');
		product.img = $(this).find('.product-image').find('img').attr('src');
		product.price = $(this).find('.k-prd-saleValue').text();

		products.push(product);
	});
    
    return products;
});


