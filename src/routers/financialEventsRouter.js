import { Router } from "express";
import { checkifUserIsAuthenticated } from "../middlewares/authMiddleware.js";
import { registerFinancialEvent, getFinancialEvents, getAmount } from "../controllers/financialEventsController.js";

const router = Router();

router.post('/financial-events', checkifUserIsAuthenticated, registerFinancialEvent);
router.get('/financial-events', checkifUserIsAuthenticated, getFinancialEvents);
router.get('/financial-events/sum', checkifUserIsAuthenticated, getAmount);

export default router;