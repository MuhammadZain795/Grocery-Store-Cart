const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const mysql = require('mysql')
const cors = require("cors")

//DB configration

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "grocery-store",
    // port: "3306",
});

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());
app.use(express.json())
connection.connect((err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("connected")
    }
})

app.get('/zain',function(req,res){
    connection.query("SELECT categoryname, itemname FROM categories, items where categories.idcategories=items.idcatogory;", (err, rows)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("Data recieved")
            console.log(rows)
            res.status(200).send(rows)
        }
    })    
});

const port = process.env.PORT || 5000;
app.listen(port);
console.log("App is listening on port " + port)
