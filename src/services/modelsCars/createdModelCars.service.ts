import AppDataSource from "../../data-source";
import ModelsCar from "../../entities/modelCar.entity";
import { AppError } from "../../errors/AppError";
import { ICarModelRequest } from "../../interfaces/models.interface";

export const createdModelsCarsService = async (data: ICarModelRequest) => {
  const modelRepository = AppDataSource.getRepository(ModelsCar);

  const dataTratament = {
    ...data,
  };

  const createdModel = modelRepository.create(dataTratament);
  await modelRepository.save(createdModel);

  return createdModel;
};
