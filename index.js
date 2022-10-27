var express = require("express");
var app = express();
var cors = require("cors");

//serve static files from public
app.use(express.static('public'));
app.use(cors());

//create user account
app.get('/account/create/:name/:email/:password', function (req,res) {
    res.send({
        name: req.params.name,
        email: req.params.email,
        password: req.params.password
    });
});

app.get('account/login/:email/:password', function(req,res) {
    res.send({
        email: req.params.email,
        password: req.params.password    });
});

app.get('account/all', function(req,res) {
    res.send({
        name: 'Peter',
        email: 'Peter@MIT.edu',
        password: 'notSoSecret'   });
});

app.get('account/deposit/:amount', function(req,res) {
    res.send({
        amount: req.params.amount    });
});

app.get('account/withdrawdock/:amount', function(req,res) {
    res.send({
        amount: req.params.amount    });
});

var port = 3000;
app.listen(port);
console.log(`Running on port ${port}`);