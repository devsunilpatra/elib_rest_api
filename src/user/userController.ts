import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  // validation

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    const error = createHttpError(400, "All fields are requred");

    return next(error);
  }
   // Database Calls
   // Process
   // Response

  res.json({ msg: "User created" });
};

export { createUser };
