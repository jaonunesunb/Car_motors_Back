import { z } from "zod";

const addressSchema = z.object({
  cep: z.string().nonempty(),
  street: z.string().nonempty(),
  city: z.string().nonempty(),
  number: z.string().nonempty(),
  state: z.string().nonempty(),
  complement: z.string().nonempty(),
  user: z.any(),
});

const addressUpdatedSchema = addressSchema.partial();

const responseAddressSchema = addressSchema.extend({
  id: z.string(),
});

const listAddressSchema = responseAddressSchema.array();

export {
  addressSchema,
  responseAddressSchema,
  addressUpdatedSchema,
  listAddressSchema,
};
