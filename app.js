const express = require("express");

const app = express();

const port = 3000;

app.use(express.static('public'));
app.use(express.static('node_modules/bootstrap/dist'));



app.get('/', (req, res) => res.send('Hello World Welcome'));
app.get('/home', (req, res) => res.send('Hello World Welcome to Home, Saavy!!'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));