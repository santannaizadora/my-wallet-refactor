import connection from "../database.js";
import jwt from "jsonwebtoken";
import { authService } from "../services/authService.js";

export const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  await authService.signUp(name, email, password);
  res.sendStatus(201);
};

// app.post("/sign-in", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.sendStatus(422);
//     }

//     const { rows } = await connection.query(
//       `SELECT * FROM "users" WHERE "email"=$1`,
//       [email]
//     );
//     const [user] = rows;

//     if (!user || !bcrypt.compareSync(password, user.password)) {
//       return res.sendStatus(401);
//     }

//     const token = jwt.sign(
//       {
//         id: user.id,
//       },
//       process.env.JWT_SECRET
//     );

//     res.send({
//       token,
//     });
//   } catch (err) {
//     console.error(err);
//     res.sendStatus(500);
//   }
// });
