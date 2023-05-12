import { Router } from "express";
import {
  createdModelController,
  deleteCarByIdController,
  listCarByIdController,
  listCarsModelsController,
  updateCarByIdController,
} from "../controllers/ModelsCars/modelCarsControllers";
import { ensureAuthMiddleware } from "../middleware/ensureAuth.middleware";

const modelRouter = Router();

modelRouter.post("", ensureAuthMiddleware, createdModelController);

modelRouter.get("", ensureAuthMiddleware, listCarsModelsController);

modelRouter.get("/:id", ensureAuthMiddleware, listCarByIdController);

modelRouter.delete("/:id", ensureAuthMiddleware, deleteCarByIdController);

modelRouter.patch("/:id", ensureAuthMiddleware, updateCarByIdController);

export default modelRouter;
