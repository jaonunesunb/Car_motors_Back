import { Request, Response } from "express";
import { IUserRequest, IUserUpdate } from "../../interfaces/user.Interface";
import { createdUserService } from "../../services/User/createdUser.service";
import { getUserService } from "../../services/User/getUser.service";
import { updateUserService } from "../../services/User/updateUser.service";
import { deleteUserService } from "../../services/User/deleteUser.service";
import { retriveUserService } from "../../services/User/userRetrive.service";
import { usersService } from "../../services/User/resetUserPassword.service";

export const createdUserController = async (req: Request, res: Response) => {
  const userDataBody: IUserRequest = req.body;
  const newUser = await createdUserService(userDataBody);
  return res.status(201).json(newUser);
};

export const getUsersController = async (req: Request, res: Response) => {
  const listUsers = await getUserService();

  return res.status(200).json(listUsers);
};

export const userRetriveController = async (req: Request, res: Response) => {
  const userId = req.params.id;

  const user = await retriveUserService(userId);

  return res.status(200).json(user);
};

export const updateUserController = async (req: Request, res: Response) => {
  const updateUserBody: IUserUpdate = req.body;

  const id: string = req.user.id;

  const updateUser = await updateUserService(updateUserBody, id);

  return res.status(200).json(updateUser);
};

export const deleteUserController = async (req: Request, res: Response) => {
  const id: string = req.user.id;
  const deleteUser = await deleteUserService(id);
  return res.status(204).json(deleteUser);
};

export const sendResetEmailPasswordController = async (
  req: Request,
  res: Response
) => {
  const { email } = req.body;
  const { protocol } = req;
  const host = req.get("host");

  await usersService.sendResetEmailPassword(email, protocol, host!);

  return res.json({ message: "token send" });
};

export const resetPasswordController = async (req: Request, res: Response) => {
  const { password } = req.body;
  const { token } = req.params;

  await usersService.resetPassword(password, token);

  return res.json({ message: "password change with sucess" });
};
