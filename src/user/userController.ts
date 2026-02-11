import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "./userModel";
import { config } from "../config/config";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body;

    // 1️ Validation
    if (!name || !email || !password) {
      return next(createHttpError(400, "All fields are required"));
    }

    // 2️ Check existing user
    const user = await userModel.findOne({ email });
    if (user) {
      return next(createHttpError(400, "User already exists"));
    }

    // 3️ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4️ Create user
    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    // 5 Generate JWT
    const token = jwt.sign(
      { sub: newUser._id.toString() },
      config.jwtsecret as string,
      { expiresIn: "1h" },
    );

    // 6️ Send response (ONLY ONCE)
    res.status(201).json({
      message: "User created successfully",
      accessToken: token,
    });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!email || !password) {
    const error = createHttpError(400, "All fields are required");

    return next(error);
  }

  return res.json({ msg: "response ok" });
};

export { createUser, loginUser };
