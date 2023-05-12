import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import Comment from "../../entities/comment.entity";

export const deleteCommentservice = async (commentId: string) => {
  const commentsRepository: Repository<Comment> =
    AppDataSource.getRepository(Comment);

  const comment = await commentsRepository.findOneBy({
    id: commentId,
  });

  if (comment) {
    await commentsRepository.remove(comment);
  }

  return {};
};
