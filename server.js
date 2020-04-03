const express = require('express');
const next = require('next');
const { v5: uuidv5 } = require('uuid');
const fetch = require('isomorphic-unfetch');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require("cookie-parser");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const oauth_url = process.env.oauth_url;
const TOKEN_STORAGE_KEY = process.env.cookie_name;
const backendUrl = process.env.backend_url;

app.prepare().then(() => {
  const server = express();
  let map;
  server.use(session({
    secret: 'XANADU', resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }));
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());
  server.use(cookieParser());

  server.get('/get', async (req, res) => {
    let url = req.headers.path;
    const auth = req.cookies[TOKEN_STORAGE_KEY];
    if (auth) {
      if (map && map[auth]) {
        let d = map[auth].token;
        let response = await fetch(`${backendUrl}${url}`, {
          crossDomain: true,
          credentials: 'include',
          headers: {
            "Authorization": `Bearer ${d}`,
          },
          method: 'get',
        });
        let resp = await response.json();
        res.status(response.status);
        res.send(resp);
      }
      else {
        res.status(401);
        res.send({
          "message": "No map available for cookie",
          "status": 401,
          "error": "User not authorized to access this resource"
        });
      }
    }
    else {
      res.status(401);
      res.send({
        "message": "No cookie available",
        "status": 401,
        "error": "User not authorized to access this resource"
      });
    }
  });

  server.post('/post', async (req, res) => {
    let url = req.headers.path;
    const auth = req.cookies[TOKEN_STORAGE_KEY];
    if (auth) {
      if (map && map[auth]) {
        let d = map[auth].token;
        let response = await fetch(`${backendUrl}${url}`, {
          crossDomain: true,
          credentials: 'include',
          headers: {
            "Authorization": `Bearer ${d}`,
            'Content-Type': 'application/json'
          },
          method: 'post',
          body: JSON.stringify(req.body)
        });
        let resp = await response.json();
        res.status(response.status);
        res.send(resp);
      }
      else {
        res.status(401);
        res.send({
          "message": "No map available for cookie",
          "status": 401,
          "error": "User not authorized to access this resource"
        });
      }
    }
    else {
      res.status(401);
      res.send({
        "message": "No cookie available",
        "status": 401,
        "error": "User not authorized to access this resource"
      });
    }
  });

  server.post('/oauth/token', async (req, res) => {
    map = req.session;
    let state=req.get('x-state');
    let bodyData = await JSON.stringify(req.body.data);
    let response = await fetch(`${oauth_url}/oauth/token/${state}`, {
      credentials: 'include',
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: bodyData
    });

    let resp = await response.json();
    // console.log(resp);
    if (resp.error && !resp.token) {
      res.status(401);
      res.send(resp);
    }
    else {
      let u_id=uuidv5('http://techfeed.in/login', uuidv5.URL);
      map[u_id] = resp;
      res.cookie(TOKEN_STORAGE_KEY, u_id);
      res.status(200).send({"status":"Success"});
    }
  });

  server.all('*', (req, res) => {
    if (req.path ==='/ping') {
      res.send('pong');
    }
    else {
      return handle(req, res);
    }
  });
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
