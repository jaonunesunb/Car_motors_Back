import { Response, Request } from "express";
import createdAddressService from "../../services/adderess/createdAddress.service";
import listAddressService from "../../services/adderess/listAddress.service";
import updatedAddressService from "../../services/adderess/updatedAddress.service";
import {
  IAddress,
  IAddressResponse,
  IAddressUpdated,
} from "../../interfaces/address.interfaces";

const createdAddressController = async (req: Request, res: Response) => {
  const data: IAddress = req.body;

  const addressData = await createdAddressService(data);

  return res.status(201).json(addressData);
};

const listAddressController = async (req: Request, res: Response) => {
  const addressesData: IAddressResponse[] = await listAddressService();

  return res.status(200).json(addressesData);
};

const updatedAddressController = async (req: Request, res: Response) => {
  const userId: string = req.user.id;
  const data = req.body;

  const updatedAddress = await updatedAddressService(data, userId);

  return res.status(200).json(updatedAddress);
};

export {
  createdAddressController,
  listAddressController,
  updatedAddressController,
};
