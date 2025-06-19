import prisma from "../config/prisma.js";

export const listUser = async (req, res, next) => {
  // code body
  try {
    const user = await prisma.user.findMany({
      omit: {
        password: true,
      },
    });
    res.json({ message: "this is list ALL user", result: user });
  } catch (error) {
    next(error);
  }
};

export const updateUserRole = async (req, res, next) => {
  try {
    // 1. Read params & body
    const { id } = req.params;
    const { role } = req.body;
    console.log(id, role);
    // 2. Update to DB
    const user = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        role: role,
      },
    });
    res.json({ message: `Update Role ${user.name}` });
  } catch (error) {
    next(error);
  }
};

export const deleteUserRole = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });
    res.json({ message: "Delete success" });
  } catch (error) {
    next(error);
  }
};

export const readUser = (req, res) => {
  res.json({ message: "This is read user" });
};

export const createUser = (req, res) => {
  res.json({ result: "this is create user" });
};

export const getMe = async (req, res, next) => {
  try {
    const { id } = req.user;
    console.log(id);
    const user = await prisma.user.findFirst({
      where: {
        id: Number(id),
      },
      omit: {
        password: true,
      },
    });
    res.json({ result: user });
  } catch (error) {
    next(error);
  }
};
