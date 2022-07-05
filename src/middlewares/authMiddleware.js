import connection from "../database.js";

export const checkIfUsersExists = async (req, res, next) => {
  const { email } = req.body;
  const existingUsers = await connection.query(
    `SELECT * FROM "users" WHERE "email"=$1`,
    [email]
  );

  if (existingUsers.rowCount > 0) {
    throw {
      type: "conflict",
      message: "User already exists",
    }
  }
  next();
};
