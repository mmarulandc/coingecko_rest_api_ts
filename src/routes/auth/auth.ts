import { Router } from "express";
import { AuthController } from "../../controllers";

const authController = new AuthController();

const AuthRouter = Router();

AuthRouter.post("/", authController.signup);
AuthRouter.get("/", authController.getUsers);

export { AuthRouter };
