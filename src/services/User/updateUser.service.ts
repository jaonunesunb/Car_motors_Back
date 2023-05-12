import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUserUpdate } from "../../interfaces/user.Interface";
import { userSchemaResponse } from "../../schema/user.schema";

export const updateUserService = async (dataBody: IUserUpdate, id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const userExists = await userRepository.findOneBy({
    id,
  });

  const { reset_token, ...res } = dataBody

  const user = userRepository.create({
    ...userExists,
    ...res,
  });

  await userRepository.save(user);

  const returnuser = userSchemaResponse.parse(user);

  return returnuser;
};
