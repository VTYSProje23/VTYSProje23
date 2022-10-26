const rp = require('request-promise');
const cheerio = require("cheerio");
const url = "https://tr.wikipedia.org/wiki/Tehlikedeki_t%C3%BCrler";
 

rp(url).then(function(html){
    const $ = cheerio.load(html);
    //var canli = new Object();
    ad = []
    sinif = []
    cins = []
    
    const adres = "div.mw-parser-output > ul > li";
    const adresSinif = "div.mw-parser-output > h2 > span.mw-headline > a";
    const adresCins = "div.mw-parser-output > h3 > span.mw-headline"

    const sinirAd = $(adres,html).length;

    for(i=0;i<sinirAd;i++){
        ad[i] = $(adres,html).eq(i).text();
        cins[i] = $(adresCins,html).eq(i).attr("id");
        sinif[i] = $(adresSinif,html).eq(i).text();
        console.log("AD: "+ad[i]+"\nCins: "+cins[i]+"\nSınıf: "+sinif[i]+"\n***********\n")
       
    }
}).catch(function(error){
    console.log(error);
});
