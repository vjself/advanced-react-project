const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller')

const app = express();
app.use(bodyParser.json());

app.get('/api/products', controller.getProducts)

const PORT = 4050;
app.listen(PORT, () => console.log(`Connected to server on port ${PORT}`))