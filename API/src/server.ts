import "reflect-metadata";
import express from "express";

import "./database";

const app = express();

app.get("/", (request, response) => {
  response.json({message: "server ok"});
})
app.listen(2021, () => console.log("Server is running!"));

