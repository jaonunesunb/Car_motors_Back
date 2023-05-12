import { Request, Response } from "express";
import {
  ICarModelRequest,
  ICarModelRequestGetModel,
  ICarModelUpdate,
} from "../../interfaces/models.interface";
import { createdModelsCarsService } from "../../services/modelsCars/createdModelCars.service";
import { listCarsModelsService } from "../../services/modelsCars/listCarsModels.service";
import { listCarByIdService } from "../../services/modelsCars/listCarById.service";
import { deleteCarByIdService } from "../../services/modelsCars/deleteCarById.service";
import { updateModelCarByIdService } from "../../services/modelsCars/updateModelsCar.service";

export const createdModelController = async (req: Request, res: Response) => {
  const dataBody: ICarModelRequest = req.body;
  const createdModel = await createdModelsCarsService(dataBody);
  return res.status(201).json(createdModel);
};

export const listCarByIdController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const car = await listCarByIdService(id);
  return res.status(200).json(car);
};

export const listCarsModelsController = async (req: Request, res: Response) => {
  const service = await listCarsModelsService();
  return res.status(200).json(service);
};

export const deleteCarByIdController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const deleteCar = await deleteCarByIdService(id);
  return res.status(204).json(deleteCar);
};

export const updateCarByIdController = async (req: Request, res: Response) => {
  const dataBody: ICarModelUpdate = req.body;
  const id: string = req.params.id;

  const updateService = await updateModelCarByIdService(id, dataBody);
  return res.status(200).json(updateService);
};
