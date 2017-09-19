var express = require('express');
var app = express();

app.get('/',function(request,response){
    response.sendFile(__dirname+"/login.html");
});
app.get('/loginUser',function(request,response){
    insertIntoDB(request,response);
    console.log('.....after insertion');
   // response.sendFile(__dirname+"/login.html");
})
app.listen('8080');

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "au-cdbr-sl-syd-01.cleardb.net",
    user: "bef3f0510c8267",
    password: "a0283aa5",
    database: "ibmx_fb49f6728921d0b"
});

function insertIntoDB(request,response)
{
    console.log('inside ....'+request.query.uname);

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO employee  VALUES ('1','Muhammed','Younus')";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted...."+response);
            response.sendFile(__dirname+"/success.html");
        });
    });
   // response.sendFile(__dirname+"/login.html");
    /*con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM employee", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
    }); */


}