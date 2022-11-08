



//const createDatabase = async () => {
  //try {
    //  await client.connect();                            
      //await client.query('CREATE DATABASE VTYS2'); 
     // return true;
  //} catch (error) {
    //  console.error(error.stack);
      //return false;
  //} finally {
    //  await client.end();                               
  //}
//};

//createDatabase().then((result) => {
  //if (result) {
  //    console.log('Database created');
//  }
//});

const { Console } = require('console');
const { Client} = require('pg')
const client =new Client({
    host:"localhost",
    user:"postgres",
    password:'121081',
    port:5432,
    database:"vtys2"
})
  client.connect(function(err){
    if(err) throw err;
     
     var sorgu= "INSERT INTO tb_canlilar (id_tur,tb_isim,tb_resim,tb_tehlike) values (21,'Asya fili','upload.wikimedia.org/wikipedia/commons/thumb/4/48/Equus_grevyi_%28aka%29.jpg/220px-Equus_grevyi_%28aka%29.jpg','upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Status_iucn2.3_EN_tr.svg/220px-Status_iucn2.3_EN_tr.svg.png')" 
     
     client.query(sorgu,function(err){
         if(err) throw err;
       
          console.log("Eklendi");
     
       });
     });

     client.connect();
client.query('SELECT * FROM tb_cins',(err,res)=>{
    if(!err){
        console.log(res.rows);
    }else  {
        console.log(err.message);
    }
    client.end;
})







