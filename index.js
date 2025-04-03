import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5000; // Allow Render to use its assigned port

// Enable default middlewares (includes CORS, logger, etc.)
server.use(middlewares);

// Custom CORS headers (important for cross-origin frontend access)
server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Change '*' to your frontend domain for more security
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Attach router (after middlewares)
server.use(router);

// Start server
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
