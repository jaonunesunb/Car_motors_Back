import { UUID } from "crypto";
import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  carReturnSchema,
  carSchema,
  carUpdateSchema,
} from "../schema/car.schemas";

export type ICar = z.infer<typeof carSchema>;
export type ICarReturn = z.infer<typeof carReturnSchema>;
export type ICarUpdated = z.infer<typeof carUpdateSchema>;
