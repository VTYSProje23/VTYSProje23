const { Console } = require('console');
const { format } = require('mysql');
const { Client} = require('pg')
const client =new Client({
  host:"localhost",
  user:"postgres",
  password:'121081',
  port:5432,
  database:"vtys2"
})
fs = require("fs")

var isim = []
var resim = []
var tehlike = []

fs.readFile('isim.txt',function(err,data){
    if(err) throw err;
    bilgi= data.toString().split("#");
    for(i=0;i<90;i++){
        isim[i]=bilgi[i]
        resim[i]=bilgi[i+90]
        tehlike[i]=bilgi[i+180]
    }
    client.connect(function(err){
    for(j=0;j<=90;j++){
      
        if(err) throw err;
         
         var sorgu= "INSERT INTO tb_canlilar (id_tur,tb_isim,tb_resim,tb_tehlike) values ('"+(j+1)+"','"+isim[j]+"','"+resim[j]+"','"+tehlike[j]+"')" 
         
         client.query(sorgu,function(err){
             if(err) throw err;
           
              console.log("Eklendi");
         
           });
         
    }
  });
    });

