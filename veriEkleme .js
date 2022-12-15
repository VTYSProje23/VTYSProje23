var mysql = require('mysql');
var fs = require("fs")

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "121081",
  database: "vtys"
});

var isim = []
var resim = []
var tehlike = []
var aciklama = []
var kita= []

fs.readFile('bilgi.txt',function(err,data){
    if(err) throw err;
    bilgi= data.toString().split("\n");
    
    for(i=0; i<760; i+=5){
        isim[i/5] = bilgi[i]
        resim[i/5] = bilgi[i+1]
        tehlike[i/5] = bilgi[i+2]
        aciklama[i/5] = bilgi[i+3]
        kita[i/5]=bilgi[i+4]
        
    }
})    

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var kita_ = ""
    for(j=0; j<152; j++){
        if(kita[j]==1){
            kita_ = 'tb_avrupa'
          }else if(kita[j]==2){
            kita_ ='tb_asya'
          }else if(kita[j]==3){
            kita_ ='tb_afrika'
          }else if(kita[j]==4){
            kita_ ='tb_gamerika'
          }else if(kita[j]==5){
            kita_ ='tb_kamerika'
          }else{
            kita_ = 'tb_avustralya'
          }
        var sql = 'INSERT INTO '+kita_+' (tur_id,isim,resim,tehlike,aciklama) values ("'+(j+1)+'","'+isim[j]+'","'+resim[j]+'","'+tehlike[j]+'","'+aciklama[j]+'")';
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Eklendi");
    });
    }
});
