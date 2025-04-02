const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // ensure path is correct
const middlewares = jsonServer.defaults();
const port = 5000;








server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });
  
