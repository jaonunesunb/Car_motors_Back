import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { IComment, ICommentReturn } from "../../interfaces/comments.interface";
import { returnCommentSchema } from "../../schema/comments.schema";
import Comment from "../../entities/comment.entity";

export const createCommentService = async (
  data: IComment
): Promise<ICommentReturn> => {
  const commentsRepository: Repository<Comment> =
    AppDataSource.getRepository(Comment);

  const comment: Comment = commentsRepository.create(data);

  await commentsRepository.save(comment);

  const returnComment = returnCommentSchema.parse(comment);

  return returnComment as ICommentReturn;
};
