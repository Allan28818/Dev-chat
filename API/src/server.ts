import "reflect-metadata";
import express from "express";

import "./database";
import { SignUpController } from "./controllers/SignUpController";
import { AddPeopleController } from "./controllers/AddPeopleController";
import { LoginController } from "./controllers/LoginController";
import { MessagesController } from "./controllers/MessagesController";

const app = express();

const signUpController = new SignUpController;
const loginController = new LoginController;
const addPeopleController = new AddPeopleController;
const messagesController = new MessagesController;

app.use(express.json());


app.post("/sign-up", signUpController.create);
app.post("/login", loginController.find);
app.post("/add-people", addPeopleController.add);
app.post("/messages/:from/:to", messagesController.send);
app.get("/messages/:from/:to", messagesController.store);

app.listen(2021, () => console.log("Server is running!"));

