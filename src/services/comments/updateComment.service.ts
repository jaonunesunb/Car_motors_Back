import { Repository } from "typeorm";
import { ICommentUpdate } from "../../interfaces/comments.interface";
import AppDataSource from "../../data-source";
import { returnCommentSchema } from "../../schema/comments.schema";
import Comment from "../../entities/comment.entity";



export const updateCommentService =async (data:ICommentUpdate, commentId:string) => {
    
    const commentsRepository: Repository<Comment> = AppDataSource.getRepository(Comment)

    const oldComment = await commentsRepository.findOneBy({
        id: commentId
    })

    const newComment = commentsRepository.create({
        ...oldComment,
        ...data
    })

    await commentsRepository.save(newComment)

    const returnComment = returnCommentSchema.parse(newComment)

    return returnComment
}