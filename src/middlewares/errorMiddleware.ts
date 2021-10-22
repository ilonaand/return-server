import  ApiError from '../exceptions/ApiError';
import { Request, Response, NextFunction } from "express";

export default (err: any, req: Request , res: Response, next: NextFunction ): Response => {
  console.log(err); 
  if (err instanceof ApiError) {
    return res.status(err.status).json({
      result: false,
      error: err.message,
    })
  }
  return res.status(500).json({
    result: false,
    error: 'Непредвиденная ошибка',
  })
};