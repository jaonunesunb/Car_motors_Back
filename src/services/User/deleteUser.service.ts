import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

export const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const userExists = await userRepository.findOneBy({
    id,
  });

  if (!userExists) {
    throw new AppError("User not exist", 409);
  }

  await userRepository.remove(userExists);
};
