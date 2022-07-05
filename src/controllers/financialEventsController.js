import { financialEventsService } from "../services/financialEventsService.js";
import { financialEventsRepository } from "../repositories/financialEventsRepository.js";

export const registerFinancialEvent = async (req, res) => {
  const { value, type } = req.body;
  const { user } = res.locals;
  console.log(user.id);
  await financialEventsService.registerFinancialEvent(value, type, user.id);
  res.sendStatus(201);
};

export const getFinancialEvents = async (req, res) => {
  const { user } = res.locals;
  const events = await financialEventsRepository.getFinancialEvents(user.id);
  res.send(events);
};

export const getAmount = async (req, res) => {
  const { user } = res.locals;
  const sum = await financialEventsService.getAmount(user.id);
  res.send({ sum });
};
