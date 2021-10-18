export interface ISelectParams {
  datebegin: string;
  dateend: string;
  companyId: string;
  goodId: string;
}

export type IParams = (string | Date | number) [];

export type IRecordObject = {
  [name: string]: (string | Date | number) 
};
