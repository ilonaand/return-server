export default class ApiError extends Error {
  status: number;
  errors: string[];
  constructor (status: number, message: string, errors: string[] = []){
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static UnauthorizedError() {
    return new ApiError(401, 'Пользователь не авторизован')
}

  static BadRequest(message: string, errors: string[] = []) {
    return new ApiError(400, message, errors);
  }
}
