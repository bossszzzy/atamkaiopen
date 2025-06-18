import express from "express";
import { register, login } from "../controller/auth.js";

const authRouter = express.Router();

// ENDPOINT http://localhost:8000/api/register
authRouter.post("/register", register);
authRouter.post("/login", login);

export default authRouter;
