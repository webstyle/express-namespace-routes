# express-namespace-routes
Express.js namespace for routes

### Installation
```npm install --save express-namespace-routes```

```javascript
const express = require('express');
const routes = require('express-namespace-routes');
const app = express();

routes.prefix('/user', (user) => {
  user.post('/', (req, res) => res.send(''));
  user.get('/', (req, res) => res.send(''));
  user.get('/:id', (req, res) => res.send(''));
  user.delete('/:id', (req, res) => res.send(''));
  user.put('/:id', (req, res) => res.send(''));

  user.prefix('/settings', (settings) => {
    settings.post('/', (req, res) => res.send(''));
  });
});

app.use(routes);
```