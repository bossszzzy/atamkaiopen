import express from "express";
import {listUser, readUser, createUser, updateUserRole, deleteUserRole, getMe} from '../controller/user.js'
import { authCheck } from "../middleware/auth.middleare.js";

const userRouter = express.Router();

// ENDPOINT http://localhost:8000/api/user
userRouter.get("/users",authCheck, listUser);

userRouter.patch("/user/role/:id",authCheck, updateUserRole);

userRouter.delete("/user/role/:id",authCheck, deleteUserRole);
userRouter.get("/getme",authCheck,getMe)


userRouter.get("/user", readUser);
userRouter.post("/user", createUser);

export default userRouter;
