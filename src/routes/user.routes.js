import { Router } from "express";
import * as userControler from "../controllers/user.controller.js";
const userRoutes = Router();

userRoutes.get("/", userControler.getAllUsers);
userRoutes.post("/", userControler.addUser);
userRoutes.put("/", userControler.updateUser);

export default userRoutes;
