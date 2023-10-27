import { Router } from "express";
import * as uc from "./user.controller.js";
import { errorHandling } from "../../../utils/errorhandling.js";
import { auth } from "../../middlewares/auth.js";
import { coreValidationFunction } from "../../middlewares/validation.js";
import { userSchema } from "./user.validationSchema.js";

const router = Router();

//* 1-signUp
router.post(
  "/signup",
  coreValidationFunction(userSchema),
  errorHandling(uc.signUp)
);

router.get("/confirmEmail/:token", errorHandling(uc.confirmEmail));
//* 2-login-->with create token
router.post("/login", errorHandling(uc.login));

//* 3-change password (user must be logged in)
router.patch("/changePassword", auth, errorHandling(uc.changePassword));

//* 4-update user (age , firstName , lastName)(user must be logged in)
router.put("/update", auth, errorHandling(uc.updateUser));

//*5-delete user(user must be logged in)
router.delete("/delete", auth, errorHandling(uc.deleteUser));

//*6-soft delete(user must be logged in)
router.patch("/softDelete", auth, errorHandling(uc.softDelete));

//*7-logout
router.patch("/logout", auth, errorHandling(uc.logOut));

export default router;
