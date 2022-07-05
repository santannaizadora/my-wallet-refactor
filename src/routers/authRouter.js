import { Router } from "express";
import { signUp, signIn } from "../controllers/authController.js";
import { checkIfUsersExists, checkIfEmailIsTaken, checkPassword } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/sign-up", checkIfEmailIsTaken, signUp);
router.post("/sign-in", checkIfUsersExists, checkPassword, signIn);

export default router;