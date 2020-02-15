'use strict'

const express = require('express');
const app = express();

require('dotenv').config();

// Shhhhh
const PORT = process.env.PORT || 3001;

//tells exprss to server files from the public server
app.use(express.static('./public'));
 
app.get('/', function (req, res) {
  res.send('Hello World');
})

app.get('/willynilly', (request, response) => {
    response.send('This will just go off all willy nilly, wild and free!')
})
 
app.listen(PORT, () => console.log(`listening on ${PORT}`));