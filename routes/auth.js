import express from "express";
import { register, login } from "../controller/auth.js";
import { loginSchema, registerSchema, validate } from "../validation/validator.js";

const authRouter = express.Router();

// ENDPOINT http://localhost:8000/api/register
authRouter.post("/register", validate(registerSchema), register);
authRouter.post("/login", validate(loginSchema), login);

export default authRouter;
