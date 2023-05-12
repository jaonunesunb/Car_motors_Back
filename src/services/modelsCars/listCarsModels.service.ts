import AppDataSource from "../../data-source";
import ModelsCar from "../../entities/modelCar.entity";
import { AppError } from "../../errors/AppError";
import { ICarModelRequestGetModel } from "../../interfaces/models.interface";

export const listCarsModelsService = async () => {
  const modelRepository = AppDataSource.getRepository(ModelsCar);

  const models = await modelRepository.find();

  return models;
};
