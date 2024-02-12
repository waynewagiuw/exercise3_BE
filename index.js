const express = require('express');
const morgan = require('morgan');
const members = require('./members');
const users = require('./users');

const app = express();
const currentDate = new Date().toISOString();

// Middleware untuk log
const log = (req, res, next) => {
    console.log(`${new Date().toISOString()} ${req.ip} ${req.originalUrl}`);
    next();
};
app.use(log);

app.get('/about', (req, res) => {
    res.status(200).json({
        'Status': 'success',
        'Message': 'response success',
        'Description': 'Exercise #02',
        'Date': currentDate,
        'Data': members
    });
});

app.get('/users', (req, res) => {
    res.status(200).json(users);
});

app.get('/', (req, res) => {
    res.send('This is the home page');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/` );
});
