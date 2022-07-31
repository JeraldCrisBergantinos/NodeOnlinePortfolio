const express = require('express');
const app = express();

app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.send('<h1>Hello from the Home Page</h1>');
});

app.get('/about', function(req, res) {
    res.send('<h1>Hello from the About page</h1>');
});

app.listen(3000, () => {
    console.log('The server is running on port 3000');
});