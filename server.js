const path = require('path');
const express = require('express');
const app = express();
const buildPath = path.join(__dirname, 'build');
const port = process.env.PORT || 3000;

app.use(express.static(buildPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server up and listening to the port ${port}`);
});
