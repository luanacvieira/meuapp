const express = require('express');
const app = express();
const port = 3000;

app.get('/index.html', (req, res) => {
  res.send('<h1>Hello, World!</h1>');
});

app.get('/health/check', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
