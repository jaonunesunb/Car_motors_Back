import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { listBasicUsersSchema } from "../../schema/user.schema";

export const getUsersBasicService = async () => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find({
    select: ["id", "name", "email", "seller"],
  });

  return listBasicUsersSchema.parse(users);
};
