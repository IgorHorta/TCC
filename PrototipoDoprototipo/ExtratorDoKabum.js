"use strict";
var extractorCore = require('./CoreExtractor');

extractorCore.extract("http://www.kabum.com.br/cgi-local/site/listagem/listagem.cgi?ordem=5&limite=9999&dep=01&sec=1432&cat=&sub=&pagina=1&string=",function(){
    var products = [];

    $('.listagem-box').each(function(index){
        var product = {};
        product.category = 'ssd'
        product.title = $(this).find('.H-titulo').text();
        product.link = $(this).find('.H-titulo').find('a').attr('href');
        product.subTitle = $(this).find('.H-subtitulo').text();
        product.img = $(this).find('.listagem-img').find('img').attr('src');
        product.price = $(this).find('.listagem-preco').text();

        products.push(product);
    });
    return products;
});


