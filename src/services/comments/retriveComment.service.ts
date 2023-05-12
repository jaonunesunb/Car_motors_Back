import { Repository } from "typeorm"
import AppDataSource from "../../data-source"
import { returnCommentSchema } from "../../schema/comments.schema"
import Comment from "../../entities/comment.entity";



export const retriveCommentService =async (commentId:string) => {
    const commentsRepository: Repository<Comment> = AppDataSource.getRepository(Comment)

    const comment = await commentsRepository.findOneBy({
        id: commentId
    })

    const returnComment = returnCommentSchema.parse(comment)

    return returnComment
}