import { Router } from "express";
import { loginController } from "../controllers/Login/loginControllers";
import { ensureEmailExists } from "../middleware/Login/userEmailExist.middleware";

const loginRouter = Router();

loginRouter.post("", ensureEmailExists, loginController);

export default loginRouter;
