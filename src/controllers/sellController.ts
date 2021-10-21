import { selectRecordSet } from "../service/sellService";
import { selectQuery } from "../sqlqueries/selectSell";
import { IRecordObject } from "../type";
import { Request, Response } from "express";
import { paramsValidator } from '../validators/sellValidator';

export const findAll = async (req: Request, res: Response) => {
  if (paramsValidator(req.query)) {
    try {
        const { dateBegin, dateEnd, outletId, goodId } = req.query as IRecordObject;
        const selectParams = [
          new Date(dateBegin), 
          new Date(dateEnd),
          outletId,
          goodId
        ];
        const sellBills = await selectRecordSet<IRecordObject>( selectQuery, selectParams);
        return sellBills? 
          res.status(201).json(JSON.parse(JSON.stringify(sellBills))) :
          res.status(404).json('not found');
    } catch (e) {
        res.status(400).json(e);
    }
  } else {
    res.status(400).json('Неверно заданы параметры');
  }
}