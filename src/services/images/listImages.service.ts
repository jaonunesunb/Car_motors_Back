import AppDataSource from "../../data-source";
import Image from "../../entities/image.entity";

export const listImagesServices = async () => {
  const imageRepository = AppDataSource.getRepository(Image);

  const images = imageRepository.find();

  return images;
};
