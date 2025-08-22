import { z } from "zod";

const userSchema = z.object({
  name: z.string(),
  email: z.string(),
  cpf: z.string(),
  password: z.string(),
  phone: z.string(),
  birthday: z.date(),
  seller: z.boolean(),
  admin: z.boolean().optional().default(false),
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
  admin: z.boolean(),
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
  admin: z.boolean(),
  address: z.any(),
  cars: z.any(),
  reset_token: z.string().nullable().optional(),
});

const listUsersSchema = userReturnSchema.array();

const userBasicReturnSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  seller: z.boolean(),
});

const listBasicUsersSchema = userBasicReturnSchema.array();

const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export {
  userSchema,
  userUpdateSchema,
  userReturnSchema,
  listUsersSchema,
  userBasicReturnSchema,
  listBasicUsersSchema,
  loginSchema,
  userSchemaResponse,
  sendEmailRequest
};