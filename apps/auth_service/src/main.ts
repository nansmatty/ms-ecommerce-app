import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send({ message: "Hello API from Auth Service" });
});

const port = process.env.PORT ? Number(process.env.PORT) : 6001;

const server = app.listen(port, () => {
  console.log(`Auth Service listening at ${port}`);
});

server.on("error", (err) => {
  console.log("Error starting the server", err);
});
