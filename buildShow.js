var fs = require('fs');



var path = "/Users/lagarde/github/SHA-007-Auction-Wall/silent-images";

fs.readdir(path, function(err, items) {
  //  console.log(items);

    for (var i=0; i<items.length; i++) {
       if(items[i].startsWith("IMG")){
        var code = "<div><img src=silent-images/"+items[i]+"/><span class=\"title shaColor\"><h3>2017 License to Give Silent Auction</h3></span></div>"
        console.log(code);
      }
    }
});
