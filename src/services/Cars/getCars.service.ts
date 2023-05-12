import AppDataSource from "../../data-source";
import Car from "../../entities/car.entity";
import { listCarSchema } from "../../schema/car.schemas";

export const getCarsService = async () => {
  const carsRepo = AppDataSource.getRepository(Car);

  const cars = await carsRepo.find({
    where: {
      isActive: true,
    },
    relations: {
      model_car: true,
      user: true,
      comments: true,
      images: true,
    },
  });

  const returnCars = listCarSchema.parse(cars);

  return returnCars;
};
