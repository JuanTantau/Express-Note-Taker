// 
// 
const express = require('express');
// 
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// 
const path = require('path');


// 
const PORT = process.env.PORT || 3001;
const app = express();


// 

app.use(express.urlencoded({ extended: true }));

// 

app.use(express.json());
// 
// 

app.use(express.static('public')); // EVERY TIME WE USE FRONT END IN THE PROJECT

// 
// 
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// 
// 
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});
// 
// 
app.listen(PORT, () => {
    console.log(`🌎Server is listening on http://localhost:${PORT} 🌎`);
});
// 
// 
// 