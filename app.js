const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '.'))); // '.' indicates that static files will be served from the current directory.

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'mokepon.html'));
});

app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000/');
});
