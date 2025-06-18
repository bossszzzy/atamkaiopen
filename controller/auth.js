import prisma from "../config/prisma.js";
import { createError } from "../utils/createError.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register = async (req, res, next) => {
  // TODO Overview Register
  /*
    0.validate with yup
    1.Check body
    2.Check Email in DB
    3.Ecrypt Password => bcryptjs
    4.Save to DB -> Prisma
    5.Response
  */
  try {
    // Step 1 Check body
    console.log(req.body);
    const { email, name, password } = req.body;

    // Step 2 Check email in db
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    console.log("user", user);
    if (user) {
      createError(400, "Email already exist!!");
    }
    const hashPassword = bcrypt.hashSync(password, 10);
    // res.send(hashPassword)
    console.log(hashPassword);
    //Step 3 ecrypt password

    //Step 4 Encrypt password
    const result = await prisma.user.create({
      data: {
        email,
        name,
        password: hashPassword,
      },
    });
    res.json({ message: "Register success" });
  } catch (error) {
    next(error);
  }
};
export const login = async (req, res, next) => {
  try {
    // code body
    /*
  0. Validate body
  1. Check body
  2. Check Email in DB
  3. Check password
  4. Create token
  5. Response
*/
    // Step 1 Check body
    const { email, password } = req.body;

    //  Step 2 Check Email in DB
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    console.log("user", user);
    if (!user) {
      createError(400, "Email or password is invalid");
    }

    //  Step 3 Check password
    const checkPassword = bcrypt.compareSync(password, user.password);
    if (!checkPassword) {
      createError(400, "Email or password is invalid");
    }

    // step 4 create token
    const payload = {
      id: user.id,
      role: user.role,
    };
    const token = jwt.sign(payload, process.env.SECRET, {
      expiresIn: "1d",
    });
    res.json({ message: `Welcome ${user.name}`, payload, token });
  } catch (error) {
    next(error);
  }
};
