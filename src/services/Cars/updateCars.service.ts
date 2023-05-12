import Car from "../../entities/car.entity";
import { ICarUpdated } from "../../interfaces/cars.interface";
import AppDataSource from "../../data-source";
import { carResponseSchema } from "../../schema/car.schemas";

export const updateCarService = async (id: string, updateFields: any) => {
  const carRepository = AppDataSource.getRepository(Car);
  const oldCar = await carRepository.findOneBy({
    id: id,
  });

  const car = carRepository.create({
    ...oldCar,
    ...updateFields,
  });

  await carRepository.save(car);

  const responseCar = carResponseSchema.parse(car);

  return responseCar;
};

export default updateCarService;
