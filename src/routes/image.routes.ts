import { Router } from "express";
import { ensureAuthMiddleware } from "../middleware/ensureAuth.middleware";
import {
  createdImageController,
  deleteImageController,
  listImagesControllers,
  updatedImageController,
} from "../controllers/Image/image.controllers";
import ensureUUIDIsValid from "../middleware/ensureUUIDIsValid.middleware";

const imageRouter = Router();

imageRouter.post("", ensureAuthMiddleware, createdImageController);

imageRouter.get("", listImagesControllers);

imageRouter.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureUUIDIsValid,
  updatedImageController
);

imageRouter.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureUUIDIsValid,
  deleteImageController
);

export default imageRouter;
