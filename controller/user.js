import { createError } from "../utils/createError.js";

export const listUser = (req, res, next) => {
  // code body
  try {
    if(true){
      createError(400,"email already exist")
    } else {
      throw new Error("Password is Invalid")
    }
    res.json({ message: "this is list ALL user" });
  } catch (error) {
    next(error)  
  }
};

export const readUser = (req, res) => {
  res.json({ message: "This is read user" });
};

export const createUser = (req, res) => {
  res.json({ message: "this is create user" });
};

export const updateUserRole = (req, res) => {
  res.json({ message: "this is update user role" });
};

export const deleteUserRole = (req, res) => {
  res.json({ message: "this is delete user role" });
};
