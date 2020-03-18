const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 8080;

const {artistPage, cartPage, entryPage, itemPage, itemAddPage, itemEditPage, itemTypePage, listArtistsPage, listItemsPage, resultsPage, transactionsPage, userPage, userEditPage } = require('./public/js/pages')

var dbUri = 'mongodb://localhost:27017/dbname';
var dbConnection = mongoose.createConnection(dbUri);

app.set('port', process.env.port || port);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/artist', artistPage);
app.get('/cart', cartPage);
app.get('/', entryPage);
app.get('/item', itemPage);
app.get('/add_item', itemAddPage);
app.get('/edit_item', itemEditPage);
app.get('/item_type', itemTypePage);
app.get('/artists', listArtistsPage);
app.get('/item_types', listItemsPage);
app.get('/results', resultsPage);
app.get('/transactions', transactionsPage);
app.get('/profile', userPage);
app.get('/edit_profile', userEditPage);

app.listen(port, () => {
    console.log(`Proceed to http://localhost:${port} to view app.`);
});