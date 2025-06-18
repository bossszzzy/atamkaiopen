import express from "express";
import {listUser, readUser, createUser, updateUserRole, deleteUserRole} from '../controller/user.js'

const userRouter = express.Router();

// ENDPOINT http://localhost:8000/api/user
userRouter.get("/users", listUser);
userRouter.get("/user", readUser);

userRouter.post("/user", createUser);

userRouter.patch("/user/role/:id", updateUserRole);

userRouter.delete("/user/role/:id", deleteUserRole);

export default userRouter;
