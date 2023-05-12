import AppDataSource from "../../data-source";
import Address from "../../entities/address.entity";
import { IAddressResponse } from "../../interfaces/address.interfaces";

const listAddressService = async (): Promise<IAddressResponse[]> => {
  const addressRepo = AppDataSource.getRepository(Address);
  const addresses = await addressRepo.find();

  return addresses;
};

export default listAddressService;
