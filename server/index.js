const express = require('express')
const app = express()
const mysql = require('mysql')


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "grocery-store",
    port: "3306",
})

connection.connect((err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("connected")
    }
})

connection.query("INSERT INTO user (username, password) VALUES ('zain', 'zain123');", (err, rows)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Data sent")
        console.log(rows)
    }
})
 
const port = process.env.PORT || 5000;
app.listen(port);
console.log("App is listening on port " + port)

// const db = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "12345678",
//     database: "grocery-store",
//     port: "3306",
// })

// app.get('/', (req,res)=>{
//     const sqlInsert = "INSET INTO user (username, password) VALUES ('zain', 'zain123');"
//     db.query(sqlInsert, (err, result)=>{
//         res.send("hello zain");
//     })
// })

// app.listen(3001, ()=>{
//     console.log("Running on port 3001")
// }); 