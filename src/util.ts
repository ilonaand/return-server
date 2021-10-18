import { ISelectParams, IParams } from './type';

export const arrParams = (selectParams: ISelectParams): IParams  => (
  [
    new Date(selectParams.datebegin), 
    new Date(selectParams.dateend),
    selectParams.companyId,
    selectParams.goodId
  ] )
  