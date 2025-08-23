import { DeepPartial } from "typeorm";
import AppDataSource from "../../data-source";
import ModelsCar from "../../entities/modelCar.entity";
import { ICarModelUpdate } from "../../interfaces/models.interface";

export const updateModelCarByIdService = async (
  id: string,
  dataBody: ICarModelUpdate
) => {
  const modelRepository = AppDataSource.getRepository(ModelsCar);

  const oldModel = await modelRepository.findOneBy({
    id,
  });

  const cleanedData: Partial<ICarModelUpdate> = {};

  for (const [key, value] of Object.entries(dataBody)) {
    if (value !== null && value !== undefined) {
      (cleanedData as Record<string, unknown>)[key] = value;
    }
  }
  const modelData: DeepPartial<ModelsCar> = {
    ...(oldModel ?? {}),
     ...(cleanedData as DeepPartial<ModelsCar>),
  };

   const model = modelRepository.create(modelData);

  return model;
};
