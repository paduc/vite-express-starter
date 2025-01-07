import express from "express";
import ViteExpress from "vite-express";

const app = express();

app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});
let counter = 0;

app.post("/counter", (_, res) => {
  counter += 1;
  res.json({ count: counter });
}); 

app.get("/counter", (_, res) => {
  res.json({ count: counter });
});



ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
