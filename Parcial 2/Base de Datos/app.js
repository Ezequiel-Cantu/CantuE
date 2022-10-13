let mysql = require('mysql')
let json2xls  = require('json2xls')
let fs = require('fs')

var con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'l19100155'
});

con.connect();

con.query('SELECT * FROM usuario', function(error, results, fields) {
    if(error) throw error;
    console.log(results);

    var xls = json2xls(results)
    fs.writeFileSync(`${__dirname}/data.xlsx`, xls, 'binary');
});

con.end();