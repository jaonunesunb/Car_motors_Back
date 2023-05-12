import AppDataSource from "../../data-source";
import Car from "../../entities/car.entity";
import Image from "../../entities/image.entity";
import ModelsCar from "../../entities/modelCar.entity";
import { ICar } from "../../interfaces/cars.interface";

const createdCarService = async (dataBody: ICar) => {
  const carRepository = AppDataSource.getRepository(Car);
  const imageRepository = AppDataSource.getRepository(Image);
  const modelCarRepository = AppDataSource.getRepository(ModelsCar);

  const { images, model_car, ...res } = dataBody;

  const new_model = modelCarRepository.create(model_car);
  await modelCarRepository.save(new_model);
  const model = await modelCarRepository.findOneBy({
    ...model_car,
  });

  const createCar = carRepository.create({
    ...res,
    model_car: {
      ...model,
    },
  });

  await carRepository.save(createCar);
  const car = await carRepository.findOne({
    where: {
      km: res.km,
      color: res.color,
      description: res.description,
      price: res.price,
      main_image: res.main_image,
    },
  });

  images?.map(async (image: any) => {
    const newImage = imageRepository.create({
      image_url: image.image_url,
      car: {
        ...car,
      },
    });
    await imageRepository.save(newImage);
  });

  return car;
};

export default createdCarService;
