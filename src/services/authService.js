import bcrypt from "bcrypt";
import { authRepository } from "../repositories/authRepository.js";

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

export const authService = {
  signUp,
};
