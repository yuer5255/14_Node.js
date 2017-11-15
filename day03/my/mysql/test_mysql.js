const mysql = require('mysql');

const connection = mysql.createConnection((err)=>{
    user:"root"
});

connection.connect();
let sql = "INSERT INTO "
connection.query();


