import express from "express";
import createHttpError from "http-errors";
import golbalErrorHandlers from "./middlewares/globalErrorHandler";
import userRouter from "./user/userRouter";

const app = express();

app.use(express.json());

//All routers

app.get("/", (req, res, next) => {

  const error = createHttpError(400, " Something went wrong");
  
  throw error;

  return res.json({ msg: "Hi from server" });
});


app.use("/api/users", userRouter);

//Global error hanlers
app.use(golbalErrorHandlers);

export default app;
