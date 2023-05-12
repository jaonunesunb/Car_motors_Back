import AppDataSource from "../../data-source";
import Address from "../../entities/address.entity";
import User from "../../entities/user.entity";
import {
  IAddress,
  IAddressResponse,
} from "../../interfaces/address.interfaces";

const createdAddressService = async (
  data: IAddress
): Promise<IAddressResponse> => {
  const addressRepo = AppDataSource.getRepository(Address);

  const newAddress: Address = addressRepo.create(data);

  await addressRepo.save(newAddress);

  return newAddress;
};

export default createdAddressService;
