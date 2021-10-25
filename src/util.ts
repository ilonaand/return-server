import { IResponse } from './type';
import { Response } from 'express';

const ok = <T>(res: Response, dto?: T) => {
  const resp: IResponse<T> = {
    result: true,
  };

  if (dto) {
    resp.data = dto;
  }

  res.statusMessage = 'success result';
  res.status(200);
  res.json(resp);
};

const errorMessage = (status: number, name: string): string  => status + ': ' + name;

export { ok, errorMessage };