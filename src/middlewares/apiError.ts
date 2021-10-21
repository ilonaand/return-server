import  ApiError from '../exceptions/ApiError';
import { Request, Response, NextFunction, Errback } from "express";

export const err = (err: any, req: Request , res: Response, next: NextFunction ) => {
  console.log(err); 
  if (err instanceof ApiError) {
      return res.status(err.status).json({message: err.message, errors: err.errors})
  }
  return res.status(500).json({message: 'Непредвиденная ошибка'})
};