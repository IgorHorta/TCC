"use strict";
var page = require('webpage').create(),
    fs = require('fs');

page.onConsoleMessage = function(msg) {
    console.log(msg);
};

function extract(url,extractFunction){
    
    page.open(url,function(status){
        if(status === "success"){
            page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function(){

                var json = page.evaluate(function(extractFunction){
                    var products = extractFunction();

                    return JSON.stringify(products);
                },extractFunction);
				
                fs.write('produtos/balaoDaInformatica/ssd.json', json, 'w');
                phantom.exit(0);

            });
       } else{
         phantom.exit(1);
       } 
    });
}

module.exports = {
	extract: extract
};
