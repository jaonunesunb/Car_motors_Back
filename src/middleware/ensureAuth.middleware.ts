import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv";
import { AppError } from "../errors/AppError";

export const ensureAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let token = req.headers.authorization as string;
  if (!token) {
    throw new AppError("Invalid token", 401);
  }
  token = token.split(" ")[1];
  try {
    const decoded = jwt.verify(
      token,
      process.env.SECRET_KEY as string
    ) as jwt.JwtPayload;

    req.user = {
      id: String(decoded.id),
      isActive: Boolean(decoded.isActive),
      admin: Boolean(decoded.admin),
    };

    return next();
  } catch (error: any) {
    throw new AppError(error.message, 401);
  }
};
