import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import bcrypt from "bcrypt"
import userModel from "./userModel";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  // validation

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    const error = createHttpError(400, "All fields are requred");

    return next(error);
  }
  // Database Calls

  const user = await userModel.findOne({ email: email });

  if (user) {
    const error = createHttpError(400, "User already exists");

    return next(error);
  }


  const hashedPassword = await bcrypt.hash(password, 10)

  // Process
  // Response

  res.json({ msg: "User created" });
};

export { createUser };
