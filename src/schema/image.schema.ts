import { z } from "zod";

const imageSchema = z.object({
  image_url: z.string().nonempty(),
  car: z.any(),
});

const imageRetunrSchema = imageSchema.extend({
  id: z.string(),
});

const listImagesSchema = imageRetunrSchema.array();

const updateImageSchema = z.object({
  image_url: z.string().nonempty(),
});

export { imageRetunrSchema, imageSchema, updateImageSchema, listImagesSchema };
