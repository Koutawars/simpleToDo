var express = require('express');
var app = express();
var path = require('path');

app.use('/js',express.static(path.resolve(__dirname + '/views/js')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/views/index.html'));
})

app.listen(process.env.PORT || 5000, function () {
    console.log('escuchando en '+ (process.env.PORT || 5000));
});