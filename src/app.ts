import express from "express";

const app = express();

app.get("/", (req, res, next) => {
 return res.json({ msg: "Hi from server" });
});

export default app;
