import AppDataSource from "../../data-source";
import Car from "../../entities/car.entity";
import Image from "../../entities/image.entity";
import ModelsCar from "../../entities/modelCar.entity";
import { ICar } from "../../interfaces/cars.interface";

const createdCarService = async (dataBody: ICar, userId: string) => {
  const carRepository = AppDataSource.getRepository(Car);
  const imageRepository = AppDataSource.getRepository(Image);
  const modelCarRepository = AppDataSource.getRepository(ModelsCar);

  const { images, model_car, ...res } = dataBody;

  const new_model = modelCarRepository.create(model_car as ModelsCar);
  await modelCarRepository.save(new_model);

  const createCar = carRepository.create({
    ...res,
    user: { id: userId },
    model_car: new_model,
  });

  await carRepository.save(createCar);

  if (images && images.length > 0) {
    const imageEntities = images.map((image: any) =>
      imageRepository.create({
        image_url: image.image_url,
        car: createCar,
      })
    );
    await imageRepository.save(imageEntities);
  }

  const car = await carRepository.findOne({
    where: { id: createCar.id },
    relations: {
      model_car: true,
      user: true,
      images: true,
      comments: true,
    },
  });

  return car;
};

export default createdCarService;
