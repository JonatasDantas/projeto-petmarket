const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')
const ejsLayouts = require('express-ejs-layouts')

const { Router } = require('./routes');

const app = express();

app.use(express.static(path.join(__dirname, "../", 'views')));

app.set('views', path.join(__dirname, "../", 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(ejsLayouts);
app.use(bodyParser.urlencoded());
app.use(express.json());
app.use(new Router().routes());

app.listen(8080, () => {
    console.log("Server is listening on port 8080")
});
