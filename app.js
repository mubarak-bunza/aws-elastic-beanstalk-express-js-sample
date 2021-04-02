const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!, excited to start learning DevOps. Added manual review stage'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
