import AppDataSource from "../../data-source";
import Car from "../../entities/car.entity";

export const deleteCarService = async (carId: string, userId: string) => {
  const carRepository = AppDataSource.getRepository(Car);

  const car = await carRepository.findOne({
    where: {
      id: carId,
      user: {
        id: userId,
      },
    },
  });

  await carRepository.remove(car!);
};
