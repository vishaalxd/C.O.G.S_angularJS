const express = require('express');
const app = express();
//testing server;

app.use(express.static(__dirname + 'public'));

// app.get('/', function (req, res) {
//     res.send('Hello World');
// });

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});