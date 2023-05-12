import { z } from "zod";
import { listAddressSchema } from "./address.schema";
import { carReturnSchema, listCarSchema } from "./car.schemas";

const userSchema = z.object({
  name: z.string(),
  email: z.string(),
  cpf: z.string(),
  password: z.string(),
  phone: z.string(),
  birthday: z.date(),
  seller: z.boolean(),
  isActive: z.boolean(),
  addresses: z.any(),
  reset_token: z.string().nullable().optional(),
});

const sendEmailRequest = z.object({
  to: z.string(),
  subject: z.string(),
  text: z.string()
})

const userSchemaResponse = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  cpf: z.string(),
  phone: z.string(),
  description: z.string(),
  birthday: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
  seller: z.boolean(),
});

const userUpdateSchema = userSchema.partial();

const userReturnSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  cpf: z.string(),
  phone: z.string(),
  description: z.string(),
  birthday: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
  seller: z.boolean(),
  address: z.any(),
  cars: z.any(),
  reset_token: z.string().nullable().optional(),
});

const listUsersSchema = userReturnSchema.array();

const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export {
  userSchema,
  userUpdateSchema,
  userReturnSchema,
  listUsersSchema,
  loginSchema,
  userSchemaResponse,
  sendEmailRequest
};
