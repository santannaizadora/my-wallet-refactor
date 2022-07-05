import connection from "../database.js";

const signUp = async (name, email, password) => {
  await connection.query(
    `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
    [name, email, password]
  );
}



export const authRepository = {
  signUp,
};