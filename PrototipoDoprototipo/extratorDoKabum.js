"use strict";
var page = require('webpage').create(),
    fs = require('fs');

page.onConsoleMessage = function(msg) {
    console.log(msg);
};

page.open("http://www.kabum.com.br/cgi-local/site/listagem/listagem.cgi?ordem=5&limite=9999&dep=01&sec=1432&cat=&sub=&pagina=1&string=", function(status) {
    if (status === "success") {
        page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
            var json = page.evaluate(function() {
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

                return JSON.stringify(products);
            });

            fs.write('produtos/ssd.json', json, 'w');
            phantom.exit(0);
        });
    } else {
      phantom.exit(1);
    }
});