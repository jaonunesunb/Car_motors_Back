import { Request, Response } from "express";
import { IUserLogin } from "../../interfaces/login.interface";
import { loginService } from "../../services/Login/login.service";

export const loginController = async (req: Request, res: Response) => {
  const loginBody: IUserLogin = req.body;
  const token = await loginService(loginBody);
  return res.status(200).json(token);
};
