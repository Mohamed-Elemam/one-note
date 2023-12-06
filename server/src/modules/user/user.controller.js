import { userModel } from "../../../database/models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//* 1-signUp

export const signUp = async (req, res, next) => {
  const { userName, email, password, cPassword } = req.body;
  if (password === cPassword) {
    const isUserExist = await userModel.findOne({ email });
    if (isUserExist) {
      return res.status(400).json({ message: "email already exist" });
    }

    const hashedPassword = bcrypt.hashSync(password, +process.env.SALT_ROUNDS);
    const userInstance = new userModel({
      userName,
      email,
      password: hashedPassword,
      isDeleted: false,
      isOnline: false,
    });
    await userInstance.save();

    const userToken = jwt.sign(
      { email, userName },
      process.env.SIGN_IN_TOKEN_SECRET
    );

    res.status(200).json({ message: "Done", userInstance, userToken });
  } else {
    return res.status(400).json({ message: "passwords dont match" });
  }
};

//===============================================================
//* 2-login-->with create token
export const login = async (req, res, next) => {
  const { email, password } = req.body;

  let user = await userModel.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "Invalid login credentials" });
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return res.status(400).json({ message: "Invalid login credentials" });
  }

  user.isOnline = true;
  user.isDeleted = false;
  user = await user.save();

  const userToken = jwt.sign(
    { email, userName: user.userName, _id: user._id },
    process.env.SIGN_IN_TOKEN_SECRET
  );
  res.status(200).json({ message: "Login successful", userToken });
};
