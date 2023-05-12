import { Response, Request } from "express";
import { createCommentService } from "../../services/comments/createComment.service";
import { IComment, ICommentUpdate } from "../../interfaces/comments.interface";
import { updateCommentService } from "../../services/comments/updateComment.service";
import { listAllCommentsService } from "../../services/comments/getAllComments.service";
import { retriveCommentService } from "../../services/comments/retriveComment.service";
import { deleteCommentservice } from "../../services/comments/deleteComment.service";

const createCommentControler = async (req: Request, res: Response) => {
  const data: IComment = req.body;

  const comment = await createCommentService(data);

  return res.status(201).json(comment);
};

const updateCommentController = async (req: Request, res: Response) => {
  const data: ICommentUpdate = req.body;
  const commentId: string = req.params.id;

  const newComent = await updateCommentService(data, commentId);

  return res.status(200).json(newComent);
};

const listAllCommentsController = async (req: Request, res: Response) => {
  const carId: string = req.params.id;
  const allComments = await listAllCommentsService(carId);

  return res.status(200).json(allComments);
};

const retriveCommentsController = async (req: Request, res: Response) => {
  const commentId = req.params.id;

  const comment = await retriveCommentService(commentId);

  return res.status(200).json(comment);
};

const deleteCommentController = async (req: Request, res: Response) => {
  const commentId = req.params.id;

  await deleteCommentservice(commentId);

  return res.status(204).send();
};

export {
  createCommentControler,
  updateCommentController,
  listAllCommentsController,
  retriveCommentsController,
  deleteCommentController,
};
