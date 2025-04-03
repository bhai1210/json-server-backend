import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = 5000;

// Apply default middlewares (includes logger, static, CORS, etc.)
server.use(middlewares);

// Custom CORS setup (you already did this correctly, just make sure it's BEFORE router)
server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Or specify your frontend origin for more security
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Add router
server.use(router);

// Start server
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
