import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  addressSchema,
  addressUpdatedSchema,
  responseAddressSchema,
} from "../schema/address.schema";

type IAddress = z.infer<typeof addressSchema>;
type IAddressResponse = z.infer<typeof responseAddressSchema>;
type IAddressUpdated = z.infer<typeof addressUpdatedSchema>;

export { IAddress, IAddressResponse, IAddressUpdated };
