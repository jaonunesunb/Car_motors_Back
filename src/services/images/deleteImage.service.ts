import AppDataSource from "../../data-source";
import Image from "../../entities/image.entity";

export const deleteImageService = async (id: string) => {
  const imageRepository = AppDataSource.getRepository(Image);

  const image = await imageRepository.findOneBy({
    id: id,
  });

  if (image) {
    await imageRepository.remove(image);
  }

  return {};
};
