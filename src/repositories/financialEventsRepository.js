import connection from "../database.js";

const registerFinancialEvent = async (value, type, userId) => {
  await connection.query(
    `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
    [userId, value, type]
  );
}

const getFinancialEvents = async (userId) => {
  const events = await connection.query(
    `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
    [userId]
  );

  return events.rows;
}

export const financialEventsRepository = {
  registerFinancialEvent,
  getFinancialEvents,
};