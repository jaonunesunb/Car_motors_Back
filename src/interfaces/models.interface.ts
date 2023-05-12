import { z } from "zod";

import {
  modelCarReturnSchema,
  modelCarSchema,
  carModelUpdateSchema,
} from "../schema/modelCar.schemas";

export type ICarModelRequest = z.infer<typeof modelCarSchema>;
export type ICarModelResponse = z.infer<typeof modelCarReturnSchema>;
export type ICarModelUpdate = z.infer<typeof carModelUpdateSchema>;

export interface ICarModelRequestGetModel {
  model: string;
}
