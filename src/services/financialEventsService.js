import { financialEventsRepository } from "../repositories/financialEventsRepository.js";

const registerFinancialEvent = async (value, type, userId) => {
  if (!value || !type) {
    throw {
      message: "Missing required fields",
      type: "missing_required_fields",
    };
  }

  const financialTypes = ["INCOME", "OUTCOME"];
  if (!financialTypes.includes(type)) {
    console.log('error2')
    throw {
      message: "Invalid type",
      type: "invalid_type",
    };
  }

  if (value < 0) {
    throw {
      message: "Invalid value",
      type: "invalid_value",
    };
  }

  await financialEventsRepository.registerFinancialEvent(value, type, userId);
};

const getAmount = async (userId) => {
  const events = await financialEventsRepository.getFinancialEvents(userId);
  const sum = events.reduce(
    (total, event) =>
      event.type === "INCOME" ? total + event.value : total - event.value,
    0
  );
  return sum;
}

export const financialEventsService = {
  registerFinancialEvent,
  getAmount,
};
