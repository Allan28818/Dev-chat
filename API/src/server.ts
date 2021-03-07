import "reflect-metadata";
import express from "express";

import "./database";
import { UsersController } from "./controllers/UsersController";

const app = express();

const usersController = new UsersController;

app.use(express.json());
app.get("/", (request, response) => {
  response.json({message: "server ok"});
})

app.post("/create-users", usersController.create);

app.listen(2021, () => console.log("Server is running!"));

