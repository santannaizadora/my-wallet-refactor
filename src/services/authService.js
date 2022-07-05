import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authRepository } from "../repositories/authRepository.js";
import { userRepository } from "../repositories/userRepository.js";

const signUp = async (name, email, password) => {
  if (!name || !email || !password) {
    throw {
      message: "Missing required fields",
      type: "missing_required_fields",
    };
  }

  const hashedPassword = bcrypt.hashSync(password, 12);
  await authRepository.signUp(name, email, hashedPassword);
};

const signIn = async (email, password) => {
  if (!email || !password) {
    throw {
      message: "Missing required fields",
      type: "missing_required_fields",
    };
  }

  const user = await userRepository.getUserByEmail(email);
  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.JWT_SECRET
  );

  return token;
}

export const authService = {
  signUp,
  signIn,
};
