import { Router } from "express";
import UserController from "../controllers/UserController";

const UserRoute = Router();

UserRoute.get("/users", UserController.listarUsers);

UserRoute.get("/user/:id", UserController.listarUserID);

UserRoute.post("/user", UserController.criarUser);

UserRoute.patch("/user/:id", UserController.atualizarUser);

UserRoute.delete("/user/:id", UserController.deletarUser);

export default UserRoute;
