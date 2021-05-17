  
const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost/${process.env.db}`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "error connecting to database " .red));

db.once('open', function(){
    console.log('Connected to database MongoDB' .cyan.bold);
});

module.exports = db;