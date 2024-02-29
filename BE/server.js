const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.json({"users": ["userOne","userTwo","userThree"]});
});

app.get('/login', (req, res) => {
    });

app.listen( 5173, () =>
    console.log('Web Server is listening at port '));