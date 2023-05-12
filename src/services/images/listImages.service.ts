import AppDataSource from "../../data-source";

export const listImagesServices = async () => {
  const imageRepository = AppDataSource.getRepository(Image);

  const images = imageRepository.find();

  return images;
};
