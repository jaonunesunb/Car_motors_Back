import { z } from "zod";
import * as Yup from "yup";

export const modelCarSchema = z.object({
  branded: z.string(),
  model: z.string(),
  year: z.string(),
  fuel: z.string(),
});

export const modelCarReturnSchema = z.object({
  id: z.string(),
  branded: z.string(),
  model: z.string(),
  year: z.string(),
  fuel: z.string(),
});

export const carModelUpdateSchema = modelCarSchema.partial();
