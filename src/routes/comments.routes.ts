import { Router } from "express";
import {
  createCommentControler,
  deleteCommentController,
  listAllCommentsController,
  retriveCommentsController,
  updateCommentController,
} from "../controllers/comments/comments.controller";
import ensureUUIDIsValid from "../middleware/ensureUUIDIsValid.middleware";
import { ensureAuthMiddleware } from "../middleware/ensureAuth.middleware";
import { commentSchema, commentUpdateSchema } from "../schema/comments.schema";
import ensureDataIsValidMiddleware from "../middleware/ensureDetailIsValid.middleware";

const commentsRouter = Router();

commentsRouter.post(
  "",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(commentSchema),
  createCommentControler
);
commentsRouter.get("/:id", listAllCommentsController);
commentsRouter.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureUUIDIsValid,
  ensureDataIsValidMiddleware(commentUpdateSchema),
  updateCommentController
);
commentsRouter.get(
  "/:id",
  ensureAuthMiddleware,
  ensureUUIDIsValid,
  retriveCommentsController
);
commentsRouter.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureUUIDIsValid,
  deleteCommentController
);

export default commentsRouter;
