var fs = require('fs');
var path = "/Users/lagarde/github/SHA-007-Auction-Wall/public/silent-images";
var csvFileName = "/Users/lagarde/github/SHA-007-Auction-Wall/image_desc.csv";
var auction_items;
//Converter Class
var Converter = require("csvtojson").Converter;
//new converter instance
var csvConverter=new Converter({});

//end_parsed will be emitted once parsing finished
csvConverter.on("end_parsed",function(jsonObj){
    console.log(jsonObj); //here is your result json object
});

//read from file
fs.createReadStream(csvFileName).pipe(csvConverter);

  fs.readdir(path, function(err, items) {
    //  console.log(items);

      for (var i=0; i<items.length; i++) {
         if(items[i].startsWith("")){

          var code = "<div><img src=silent-images/"+items[i]+" /><span class=\"title shaColor\"><h3>2017 License to Give Silent Auction</h3></span></div>"
          console.log(code);
        }
      }
  });
