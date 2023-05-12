import {z} from 'zod'
import { DeepPartial } from 'typeorm'
import {commentSchema, commentUpdateSchema, returnCommentSchema,returnCommentsArraySchema} from "../schema/comments.schema"


type IComment = z.infer<typeof commentSchema>
type ICommentReturn = z.infer<typeof returnCommentSchema>
type ICommentsReturn = z.infer<typeof returnCommentsArraySchema>
type ICommentUpdate = DeepPartial<IComment>

export {IComment, ICommentReturn, ICommentUpdate, ICommentsReturn}