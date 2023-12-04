import Joi from "joi";

export const userSchema = {
  body: Joi.object({
    userName: Joi.string().min(3).max(15).required(),
    email: Joi.string()
      .email({ tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string()
      .pattern(
        new RegExp("^(?=.*[A-Z])(?=.*[.!@#$%^&*])(?=.*[a-z])(?=.*[0-9]){8,}")
      )
    .required('Must contain at least one uppercase letter, one special character (!@#$%^&*), one lowercase letter, one digit, and be minimum 8 characters long'),
    cPassword: Joi.ref("password"),
    age: Joi.number().integer().min(16).max(100).optional(),
    gender: Joi.string().valid("male", "female").optional(),
    phone: Joi.string().pattern(new RegExp("^01[0-9]{8}")).optional(),
  }),
};
