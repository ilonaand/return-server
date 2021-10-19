import { Request } from "express";

export const makeDataValidator = (query: any): boolean => {
  const check =
   typeof query ==='object'
    &&
    typeof query.dateBegin === 'string' 
    && 
    typeof query.dateEnd === 'string'
    &&
    typeof query.outletId === 'string'
    &&
    typeof query.goodId === 'string' ;
  return check; 
}
