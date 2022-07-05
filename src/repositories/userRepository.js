import connection from "../database.js";

const getUserByEmail = async (email) => {
  const { rows } = await connection.query(
    `SELECT * FROM "users" WHERE "email"=$1`,
    [email]
  );
  return rows[0];
}

export const userRepository = {
  getUserByEmail,
};