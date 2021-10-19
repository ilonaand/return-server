import { selectRecordSet } from "./selectService";
import { selectQuery } from "./sqlqueries/selectSellbill";
import { IRecordObject } from "./type";
import { Request, Response } from "express";
import { makeDataValidator } from './validator';

export const getSellBills = async (req: Request, res: Response) => {
  if (makeDataValidator(req.query)) {
    try {
        const { dateBegin, dateEnd, outletId, goodId } = req.query as IRecordObject;
        const selectParams = [
          new Date(dateBegin), 
          new Date(dateEnd),
          outletId,
          goodId
        ];
        const sellBills = await selectRecordSet<IRecordObject>( selectQuery, selectParams);
        return sellBills? res.status(201).json(sellBills) : res.status(404).json('not found');
    } catch (e) {
        res.status(500).json(e);
    }
  } else {
    res.status(500).json('Неверно заданы параметры');
  }
}