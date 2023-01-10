const express = require('express');
const app = express();
const port = 3000;
// route
app.get('/giai-tri', (req, res) => 
  res.send('Hello World!')
);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// Main purpose of Nodemon is reload node application without run again if file changes are detected

