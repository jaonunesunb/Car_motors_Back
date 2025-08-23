import AppDataSource from "../../data-source";
import { IImageUpdate } from "../../interfaces/image.interface";
import Image from "../../entities/image.entity";

export const updateImageService = async (id: string, data: IImageUpdate) => {
  const imageRepository = AppDataSource.getRepository(Image);

  const oldImage = await imageRepository.findOneBy({
    id: id,
  });

  const image = imageRepository.create({
    ...oldImage,
    ...data,
  });

  await imageRepository.save(image);

  return image;
};
