const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"121081",
    database:"vtys"
});
 
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

 app.get("/api/get/asya", (req,res)=> {
     const sqlGet = "SELECT * FROM tb_asya";
     db.query(sqlGet,(error,result) => {
         res.send(result);
     });
 });
 app.get("/api/get/avrpa",(req,res)=> {
    const sqlGet2 = "SELECT * FROM tb_avrupa";
    db.query(sqlGet2, (error, result) =>{
        res.send(result);
    });
    
});

app.get("/api/get/afrika",(req,res)=> {
    const sqlGet3 = "SELECT * FROM tb_afrika";
    db.query(sqlGet3, (error, result) =>{
        res.send(result);
    });
    
});

app.get("/api/get/avustralya",(req,res)=> {
    const sqlGet4 = "SELECT * FROM tb_avustralya";
    db.query(sqlGet4, (error, result) =>{
        res.send(result);
    });
    
});
app.get("/api/get/kamerika",(req,res)=> {
    const sqlGet5 = "SELECT * FROM tb_kamerika";
    db.query(sqlGet5, (error, result) =>{
        res.send(result);
    });
    
});
app.get("/api/get/gamerika",(req,res)=> {
    const sqlGet6 = "SELECT * FROM tb_gamerika";
    db.query(sqlGet6, (error, result) =>{
        res.send(result);
    });
    
});

app.listen(8080, () => {
    console.log("server is running on port 8080");
})