import AppDataSource from "../../data-source";
import Address from "../../entities/address.entity";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import {
  IAddress,
  IAddressResponse,
  IAddressUpdated,
} from "../../interfaces/address.interfaces";
import { responseAddressSchema } from "../../schema/address.schema";

const updatedAddressService = async (
  data: any,
  userId: string
): Promise<IAddressResponse> => {
  const addressRepo = AppDataSource.getRepository(Address);
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOne({
    where: {
      id: userId,
    },
    relations: {
      address: true,
    },
  });

  if (!user) {
    throw new AppError("user not found", 409);
  }

  const address = await addressRepo.findOneBy({
    id: user.address[0].id,
  });

  if (!address) {
    throw new AppError("Adress not found", 409);
  }

  const updatedAddress = addressRepo.create({
    ...address,
    ...data,
  });

  await addressRepo.save(updatedAddress);

  const returnAddress = responseAddressSchema.parse(updatedAddress);

  return returnAddress as IAddressResponse;
};

export default updatedAddressService;
