import { NextFunction, Response, Request } from "express";



const createBook = async (req: Request, res: Response, next: NextFunction) => {


 

  res.json("Book has been created");
};

export default createBook;
