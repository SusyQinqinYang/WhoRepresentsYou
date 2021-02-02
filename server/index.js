const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(3055, ()=> console.log('Server is listening on 3055'));