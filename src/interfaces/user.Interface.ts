import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  listUsersSchema,
  listBasicUsersSchema,
  userBasicReturnSchema,
  sendEmailRequest,
  userReturnSchema,
  userSchema,
} from "../schema/user.schema";

type IUserRequest = z.infer<typeof userSchema>;
type IUsers = z.infer<typeof listUsersSchema>;
type IUser = z.infer<typeof userReturnSchema>;
type IBasicUser = z.infer<typeof userBasicReturnSchema>;
type IBasicUsers = z.infer<typeof listBasicUsersSchema>;
type IUserUpdate = DeepPartial<IUserRequest>;
type ISendEmailRequest = z.infer<typeof sendEmailRequest>;

export {
  IUser,
  IUserRequest,
  IUserUpdate,
  IUsers,
  IBasicUser,
  IBasicUsers,
  ISendEmailRequest,
};