import { Router } from "express";
import * as uc from "./user.controller.js";
import { errorHandling } from "../../../utils/errorhandling.js";
import { coreValidationFunction } from "../../middlewares/validation.js";
import { userSchema } from "./user.validationSchema.js";

const router = Router();

router.post(
  "/signup",
  coreValidationFunction(userSchema),
  errorHandling(uc.signUp)
);

router.post("/login", errorHandling(uc.login));

export default router;
