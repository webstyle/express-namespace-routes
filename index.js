const express = require('express');
const routes = express.Router({ mergeParams: true });

function namespaceRoutes(path, configure) {
  const router = express.Router({ mergeParams: true });
  this.use(path, router);
  configure(router);
  return router;
}

express.application.prefix = namespaceRoutes;
express.Router.prefix = namespaceRoutes;

module.exports = routes;
