import { Request, Response, NextFunction } from "express";
import "dotenv/config";
import { AppError } from "../../errors/AppError";
import AppDataSource from "../../data-source";
import Car from "../../entities/car.entity";

export const ensureCarDoesntExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const carId = req.params.id;

  const carRepository = AppDataSource.getRepository(Car);
  const existingCar = await carRepository.findOneBy({
    id: carId,
  });

  if (!existingCar) {
    throw new AppError("this car is not registered", 409);
  }

  return next();
};
