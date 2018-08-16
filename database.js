const mysql = require('mysql');
const query = require('./query');
var connection = require('express-myconnection');

function createPool(){

    var pool =  mysql.createPool({
        host: "localhost",
        user: "root",
        password: "root",
        port : 3306,
        database: "tutorial"
    });
    return pool;
}
 
function insertData(insertParam, callback){
    var pool = createPool();
    pool.getConnection(function (err,connection) {
        if(err){
            callback(err,null);
        }
    connection.query(query.INSERT_DATA_RAW,[insertParam],function (err,rows) {
                if(err){
                    callback(err,null);
                }   else
                    callback(null,rows);
            })
    })
}

module.exports.insertData = insertData;