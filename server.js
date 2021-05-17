const express = require("express")
const colors = require( 'colors')
const dotenv = require('dotenv')

//FOR ENVIRONMENT VARIABLES
dotenv.config({ path: './.env'})

const app = express();
const PORT = process.env.PORT || 3001;

const db = require('./config/mongoose')

//Define routes
app.use('/', require('./routes'));


//listen port on environment or port
app.listen(PORT, (err) => {
    if (err) {
        console.log(`Error in running the server: ${err}`.red.underline); 
    }
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);

});