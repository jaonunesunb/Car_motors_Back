import { z } from "zod";

import { loginSchema } from "../schema/user.schema";

export type IUserLogin = z.infer<typeof loginSchema>;
