import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  listUsersSchema,
  sendEmailRequest,
  userReturnSchema,
  userSchema,
} from "../schema/user.schema";

type IUserRequest = z.infer<typeof userSchema>;
type IUsers = z.infer<typeof listUsersSchema>;
type IUser = z.infer<typeof userReturnSchema>;
type IUserUpdate = DeepPartial<IUserRequest>;
type ISendEmailRequest = z.infer<typeof sendEmailRequest>;

export { IUser, IUserRequest, IUserUpdate, IUsers, ISendEmailRequest };
