import { Router } from "express";
import {
  createdAddressController,
  listAddressController,
  updatedAddressController,
} from "../controllers/Address/address.controllers";
import ensureUUIDIsValid from "../middleware/ensureUUIDIsValid.middleware";
import { ensureAuthMiddleware } from "../middleware/ensureAuth.middleware";

const addressRoutes = Router();

addressRoutes.get("", listAddressController);
addressRoutes.post("", ensureAuthMiddleware, createdAddressController);
addressRoutes.patch("/", ensureAuthMiddleware, updatedAddressController);

export default addressRoutes;
