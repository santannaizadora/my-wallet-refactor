import connection from "../database.js";
import jwt from "jsonwebtoken";
import { authService } from "../services/authService.js";

export const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  await authService.signUp(name, email, password);
  res.sendStatus(201);
};

export const signIn = async (req, res) => {
    const { email, password } = req.body;
    const token = await authService.signIn(email, password);
    res.send({ token });
};
