export default class ApiError extends Error {
  status: number;
  name: string;
  constructor (status: number, name: string, message: string){
    super(message);
    this.status = status;
    this.name = name;
  }

  public toString(): string {
    return `${this.name} (${this.status}): ${this.message}\n${this.stack || ''}`;
  }

  static UnauthorizedError(): ApiError  {
    return new ApiError(401, 'Пользователь не авторизован', 'UnauthorizedError')
}

  static BadRequest(message: string, name: string = 'BadRequest'): ApiError {
    return new ApiError(400, name, message);
  }

  static DataNotFound(message: string, name: string = 'DataNotFound'): ApiError {
    return new ApiError(404, name, message);
  }
}
