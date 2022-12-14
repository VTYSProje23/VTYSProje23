const rp = require('request-promise');
const cheerio = require("cheerio");
const url = "https://tr.wikipedia.org/wiki/Tehlikedeki_t%C3%BCrler";

rp(url).then(function(html){
    var $ = cheerio.load(html);
    adres = "div.mw-parser-output>ul>li>a:nth-child(1)"
    for(i=0;i<$(adres,html).length-3;i++){
        
        if($(adres,html).eq(i).hasClass("new")){
            continue;
        }
        
        rp("https://tr.wikipedia.org"+$(adres,html).eq(i).attr("href")).then(function(html){
            var $ = cheerio.load(html);
            var adresIsim = "div.mw-content-container>main:nth-child(1)>header>h1"
            var adresResim = "a.image>img"
            var adresTehlike = "td>img"
            var adresBilgi = "div.mw-parser-output>p"

            var tehlike = $(adresTehlike,html).attr("src")
            if($("img<div<div",html).hasClass("center")){
                tehlike = $("div.center>div>img",html).attr("src")    
            }
            var bilgi = $(adresBilgi,html).text()   
            var isim = $(adresIsim,html).text()
            var resim = $(adresResim,html).attr("src")
            bilgi_ = bilgi.split(".")
            
            console.log(isim+"#")
            console.log(resim+"#")
            console.log(tehlike+"#")
            if(bilgi_.length<2){
                console.log(bilgi_[0]+". #")
            }else if(bilgi_.length<3){
                console.log(bilgi_[0]+"."+bilgi_[1]+". #")
            }else{
                console.log(bilgi_[0]+"."+bilgi_[1]+"."+bilgi_[2]+". #")
            }
        })
    }
    
}).catch(function(error){
    console.log(error);
});

