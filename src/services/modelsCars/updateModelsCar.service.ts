import AppDataSource from "../../data-source";
import ModelsCar from "../../entities/modelCar.entity";
import { AppError } from "../../errors/AppError";
import { ICarModelUpdate } from "../../interfaces/models.interface";
import { carModelUpdateSchema } from "../../schema/modelCar.schemas";

export const updateModelCarByIdService = async (id: string, dataBody: any) => {
  const modelRepository = AppDataSource.getRepository(ModelsCar);

  const oldModel = await modelRepository.findOneBy({
    id,
  });

  const model = modelRepository.create({
    ...oldModel,
    ...dataBody,
  });

  await modelRepository.save(model);

  return model;
};
