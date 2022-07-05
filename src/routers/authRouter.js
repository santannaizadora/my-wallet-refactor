import { Router } from "express";
import { signUp } from "../controllers/authController.js";
import { checkIfUsersExists } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/sign-up", checkIfUsersExists, signUp);

export default router;