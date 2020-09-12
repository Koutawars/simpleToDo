var express = require('express');
var app = express();


app.set('views', path.join(__dirname ,'/views'));
app.listen(process.env.PORT || 5000, function () {
    console.log('escuchando en '+ (process.env.PORT || 5000));
});