import { Router } from "express";
import { ensureCarDoesntExists } from "../middleware/Car/ensureCarNotExists.middleware";
import { ensureAuthMiddleware } from "../middleware/ensureAuth.middleware";
import {
  createdCarsController,
  deleteCarController,
  getCarByIdController,
  getCarsController,
  updateCarController,
} from "../controllers/Cars/carsControllers";
import ensureUUIDIsValid from "../middleware/ensureUUIDIsValid.middleware";
import { ensureCarExists } from "../middleware/Car/ensureCarExist.middleware";

const carsRouter = Router();

carsRouter.post(
  "",
  ensureAuthMiddleware,
  ensureCarExists,
  createdCarsController
);

carsRouter.get("", getCarsController);

carsRouter.get(
  "/:id",
  ensureUUIDIsValid,
  ensureCarDoesntExists,
  getCarByIdController
);

carsRouter.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureUUIDIsValid,
  ensureCarDoesntExists,
  updateCarController
);

carsRouter.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureUUIDIsValid,
  ensureCarDoesntExists,
  deleteCarController
);

export default carsRouter;
