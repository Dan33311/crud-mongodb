const express = require('express');
const initDB = require('./DB/config');

const app = express();



initDB();


app.listen(3000, () => {
    console.log('Running on port 3000');
});


// some coment beacuse testing commits