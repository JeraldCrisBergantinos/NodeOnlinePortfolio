const path = require('path');
const express = require('express');
const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');

let port = process.env.PORT;
if (port == null || port == "") port = 3000;

app.use(express.static(publicDirectoryPath));

app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('index', {
        title: "home",
        name: "Bergs"
    });
});

app.get('/about', function(req, res) {
    res.send('<h1>Hello from the About page</h1>');
});

app.listen(port, () => {
    console.log('The server is running on port 3000');
});