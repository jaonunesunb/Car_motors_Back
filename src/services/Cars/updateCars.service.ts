import Car from "../../entities/car.entity";
import { ICarUpdated } from "../../interfaces/cars.interface";
import AppDataSource from "../../data-source";
import { carResponseSchema } from "../../schema/car.schemas";
import { DeepPartial } from "typeorm";

export const updateCarService = async (id: string, updateFields: ICarUpdated) => {
  const carRepository = AppDataSource.getRepository(Car);
  const oldCar = await carRepository.findOneBy({
    id: id,
  });

  const cleanedData: Partial<ICarUpdated> = {};


  for (const [key, value] of Object.entries(updateFields)) {
    if (value !== null && value !== undefined) {
      (cleanedData as Record<string, unknown>)[key] = value;
    }
  }

  const partialCar: DeepPartial<Car> = cleanedData as DeepPartial<Car>;

  const car = carRepository.create({
    ...(oldCar ?? {}),
     ...partialCar,
  });

  await carRepository.save(car);

  const responseCar = carResponseSchema.parse(car);

  return responseCar;
};

export default updateCarService;
