import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { userReturnSchema, userSchemaResponse } from "../../schema/user.schema";

export const retriveUserService = async (userId: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      address: true,
      cars: true,
    },
  });

  const returnuser = userSchemaResponse.parse(user);

  return returnuser;
};
