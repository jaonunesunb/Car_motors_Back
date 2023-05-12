import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { listUsersSchema, userReturnSchema } from "../../schema/user.schema";

export const getUserService = async () => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find({
    relations: {
      cars: true,
      address: true,
    },
  });

  const returnUser = listUsersSchema.parse(users);

  return returnUser;
};
