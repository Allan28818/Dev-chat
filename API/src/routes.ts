import { SignUpController } from "./controllers/SignUpController";
import { AddPeopleController } from "./controllers/AddPeopleController";
import { LoginController } from "./controllers/LoginController";
import { MessagesController } from "./controllers/MessagesController";
import { Router } from "express";
import { FindPeopleByNumberController } from "./controllers/FindPeopleByNumberController";


const signUpController = new SignUpController;
const loginController = new LoginController;
const addPeopleController = new AddPeopleController;
const messagesController = new MessagesController;
const findPeopleByNumberController = new FindPeopleByNumberController;


const router = Router();

router.post("/sign-up", signUpController.create);
router.post("/login", loginController.find);
router.post("/add-people", addPeopleController.add);
router.post("/find-user", findPeopleByNumberController.findPeople);
router.post("/messages/:from/:to", messagesController.send);
router.get("/messages/:from/:to", messagesController.store);


export { router };