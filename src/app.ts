import express from "express";
import createHttpError from "http-errors";
import golbalErrorHandlers from "./middlewares/globalErrorHandler";


const app = express();

app.get("/", (req, res, next) => {

  const error = createHttpError(400, " Something went wrong");
  
  throw error;

  return res.json({ msg: "Hi from server" });
});

//Global error hanlers
app.use(golbalErrorHandlers);

export default app;
