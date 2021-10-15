export interface ISelectParam {
  datebegin: string;
  dateend: string;
  companyId: string;
  goodId: string;
}

export interface ISelectParams {
  data: ISelectParam[];
}