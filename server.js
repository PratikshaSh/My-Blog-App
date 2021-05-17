const express = require("express")
const colors = require( 'colors')
const dotenv = require('dotenv')
const bodyParser  = require("body-parser")

//FOR ENVIRONMENT VARIABLES
dotenv.config({ path: './.env'})

const app = express();
const PORT = process.env.PORT || 3001;

const db = require('./config/mongoose')

//Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: false}));
//Parse JSON bodies (As sent by API clients)
app.use(express.json());

//Define routes
app.use('/', require('./routes'));


//listen port on environment or port
app.listen(PORT, (err) => {
    if (err) {
        console.log(`Error in running the server: ${err}`.red.underline); 
    }
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);

});