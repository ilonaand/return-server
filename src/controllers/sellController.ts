import { selectRecordSet } from "../service/sellService";
import { selectQuery } from "../sqlqueries/selectSell";
import { IRecordObject } from "../type";
import { NextFunction, Request, Response } from "express";
import { paramsValidator } from '../validators/sellValidator';
import  ApiError from '../exceptions/ApiError';
import { ok } from "../util";

export const findAll = async (req: Request, res: Response, next: NextFunction) => {
  if (paramsValidator(req.query)) {
    try {
        const { dateBegin, dateEnd, outletId, goodId } = req.query as IRecordObject;
        const selectParams = [
          new Date(dateBegin), 
          new Date(dateEnd),
          outletId,
          goodId
        ];
        const sellBills: IRecordObject[] | undefined = await selectRecordSet<IRecordObject>( selectQuery, selectParams);
        if ((sellBills ?? []).length == 0) { 
          return next(ApiError.DataNotFound('Накладные за период не найдены')) 
        };
        return ok(res, JSON.parse(JSON.stringify(sellBills)));   
        //res.status(200).json(JSON.parse(JSON.stringify(sellBills))) ;
    } catch (e) {
      next(e);
    }
  } else {
    next(ApiError.BadRequest('Неверно заданы параметры'));
  }
}