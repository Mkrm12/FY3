// Import the modules we need
var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var path = require('path');  // <-- Add this line

// Create the express application object
const app = express();
const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "iPortfolio" folder, including assets (css, js, etc.)
app.use('/portfolio', express.static(path.join(__dirname, 'iPortfolio')));

// Route for the /portfolio homepage (index.html in the "iPortfolio" folder)
app.get('/portfolio', (req, res) => {
  res.sendFile(path.join(__dirname, 'iPortfolio', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
