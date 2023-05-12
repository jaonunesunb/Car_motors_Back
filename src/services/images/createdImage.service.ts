import AppDataSource from "../../data-source";
import Image from "../../entities/image.entity";

export const createdImageService = async (data: []) => {
  const imageRepository = AppDataSource.getRepository(Image);

  data.map(async (image) => {
    const newImage = imageRepository.create(image);
    await imageRepository.save(newImage);
  });

  return;
};
