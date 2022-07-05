import { userRepository } from "../repositories/userRepository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import '../setup.js';

export const checkIfEmailIsTaken = async (req, res, next) => {
  const { email } = req.body;
  const existingUsers = await userRepository.getUserByEmail(email);

  if (existingUsers) {
    throw {
      type: "conflict",
      message: "User already exists",
    };
  }
  next();
};

export const checkIfUsersExists = async (req, res, next) => {
  const { email } = req.body;
  const existingUsers = await userRepository.getUserByEmail(email);

  if (!existingUsers) {
    throw {
      type: "not_found",
      message: "User does not exist",
    };
  }
  next();
};

export const checkPassword = async (req, res, next) => {
  const { email, password } = req.body;
  const existingUsers = await userRepository.getUserByEmail(email);
  const isPasswordValid = bcrypt.compareSync(password, existingUsers.password);
  if (!isPasswordValid) {
    throw {
      type: "invalid_credentials",
      message: "Invalid credentials",
    };
  }
  next();
};

export const checkifUserIsAuthenticated = async (req, res, next) => {
  const authorization = req.headers.authorization || "";
  const token = authorization.replace("Bearer ", "");

  if (!token) {
    throw {
      type: "unauthorized",
      message: "Unauthorized",
    };
  }
  const user = jwt.verify(token, process.env.JWT_SECRET); 
  res.locals.user = user;
  next();
};
