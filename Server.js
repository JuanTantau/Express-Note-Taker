// Creates an Express application.
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes'); 
const path = require('path');
//to be able to change files in directory we need file system module and to work with location of files path module



// Express
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public')); //

//app.use will target index.js files in the folders we required 
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// starts the server
app.listen(PORT, () => {
    console.log(`🌎Server is listening on http://localhost:${PORT} 🌎`);
});