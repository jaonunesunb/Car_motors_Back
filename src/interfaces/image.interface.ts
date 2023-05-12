import { z } from "zod";
import {
  imageRetunrSchema,
  imageSchema,
  listImagesSchema,
  updateImageSchema,
} from "../schema/image.schema";

type IImage = z.infer<typeof imageSchema>;
type IImageReturn = z.infer<typeof imageRetunrSchema>;
type IImages = z.infer<typeof listImagesSchema>;
type IImageUpdate = z.infer<typeof updateImageSchema>;

export { IImage, IImageReturn, IImageUpdate, IImages };
