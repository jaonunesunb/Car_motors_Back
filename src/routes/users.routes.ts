import { Router } from "express";
import {
  createdUserController,
  deleteUserController,
  getUsersBasicController,
  getUsersController,
  resetPasswordController,
  sendResetEmailPasswordController,
  updateUserController,
  userRetriveController,
} from "../controllers/User/usersControllers";
import { ensureAuthMiddleware } from "../middleware/ensureAuth.middleware";
import { getUserCarsController } from "../controllers/Cars/carsControllers";
import { ensureUserExists } from "../middleware/User/userDoesntExist.middleware";

const userRouter = Router();

userRouter.post("", ensureUserExists, createdUserController);

userRouter.get("", ensureAuthMiddleware, getUsersController);

userRouter.get("/basic", ensureAuthMiddleware, getUsersBasicController);

userRouter.get("/:id", userRetriveController);

userRouter.get("/:id/cars", getUserCarsController);

userRouter.patch("", ensureAuthMiddleware, updateUserController);

userRouter.delete("", ensureAuthMiddleware, deleteUserController);

userRouter.post("/resetPassword", sendResetEmailPasswordController);

userRouter.patch("/resetPassword/:token", resetPasswordController);

export default userRouter;
