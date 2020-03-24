const express = require('express');
const next = require('next');
const port = 3000;
const dev = 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.all('*', (req, res) => {
    if(req.path=='/ping'){
      res.send('pong');
    }
    else{
      return handle(req, res);
    }
  });
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

