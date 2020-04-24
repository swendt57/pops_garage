const path = require('path');
const express = require('express');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
console.log(publicPath);
const port = process.env.PORT || 3000;
console.log("port: " + port)

app.use(express.static('C:\\Projects\\pops_garage\\public'));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, (req, res) => {
    console.log('Server is up on ' + port + '!');
});