import jsonServer from 'json-server';
import __dirname from '../utils/dirname.js';
import path from 'path';

const server = jsonServer.create();

const filepath = path.join(__dirname(import.meta.url), 'db.json');
const router = jsonServer.router(filepath);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/items', function (req, res, next) {
  const error = validateItem(req.body);

  if (error) {
    res.status(400).send(error);
  } else {
    next();
  }
});

server.use(router);

server.listen(3001, () => {
  console.log('JSON Server is running');
});

function validateItem(item) {
  if (!item.title) {
    return 'title is required.';
  }

  if (item.complete === undefined) {
    return 'complete is required.';
  }
}
