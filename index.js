// FileName: index.js
// Import express
let express = require('express');
// Initialize the app
let app = express();
// Setup server port
var port = process.env.PORT || 8080;
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));


// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});

// Import routes
let apiRoutes = require("./api-routes");
// Use Api routes in the App
app.use('/api', apiRoutes);

// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
// Deprecated: mongoose.connect('mongodb://localhost/resthub');
mongoose.connect('mongodb://localhost/data', { useNewUrlParser: true});
var db = mongoose.connection;


