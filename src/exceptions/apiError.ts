export default class ApiError extends Error {
  status: number;
  constructor (status: number, message: string){
    super(message);
    this.status = status;
  }

  static UnauthorizedError(): ApiError  {
    return new ApiError(401, 'Пользователь не авторизован')
}

  static BadRequest(message: string): ApiError {
    return new ApiError(400, message);
  }

  static DataNotFound(message: string): ApiError {
    return new ApiError(404, message);
  }
}
