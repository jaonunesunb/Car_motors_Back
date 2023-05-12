import Car from "../../entities/car.entity";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { carReturnSchema, listCarSchema } from "../../schema/car.schemas";

export const getUserCarsService = async (id: any) => {
  const carRepository = AppDataSource.getRepository(Car);
  const cars = await carRepository.find({
    where: {
      user: {
        id: id,
      },
    },
    relations: {
      images: true,
      model_car: true,
      comments: true,
      user: true,
    },
  });

  const returnCars = listCarSchema.parse(cars);

  return returnCars;
};

export default getUserCarsService;
