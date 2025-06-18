import { object, ref, string } from "yup";

export const registerSchema = object({
  email: string().email("Incorrect email").required("input email"),
  name: string().min(2, "name more than three"),
  password: string().min(6, "password more than 6"),
  confirmPassword: string().oneOf([ref("password"), null], "Not Correct"),
});

export const loginSchema = object({
  email: string().email("Incorrect email").required("input email"),
  password: string().min(6, "password more than 6"),
});

export const validate = (schema) => async (req, res, next) => {
  // code body

  try {
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    const errMsg = error.errors.map((item) => item);
    const errTxt = errMsg.join(",")
    console.log(errTxt)
    const mergeErr = new Error(errTxt)
    next(mergeErr);
  }
};