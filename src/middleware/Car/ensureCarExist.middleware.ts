import { Request, Response, NextFunction } from "express";
import "dotenv/config";
import { AppError } from "../../errors/AppError";
import AppDataSource from "../../data-source";
import Car from "../../entities/car.entity";

export const ensureCarExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const car = req.body;

  const carRepository = AppDataSource.getRepository(Car);

  const existingCar = await carRepository.findOneBy({
    km: car.km,
    price: car.price,
    color: car.color,
    description: car.description,
    main_image: car.main_image,
  });

  if (existingCar) {
    throw new AppError("this alread registered", 409);
  }

  return next();
};
