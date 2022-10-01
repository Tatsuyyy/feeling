export type ErrorDetail = {
  statusCode: number;
  message: string;
  name: string;
};

/**
 * HTTPレスポンスに関係するエラークラス
 * serializeでレスポンス時に必要な情報を展開できる
 */
export class HttpError extends Error {
  statusCode: number = 400;
  constructor(errors: ErrorDetail) {
    super(errors.message);
    this.name = errors.name;
    this.message = errors.message;
    this.statusCode = errors.statusCode;
  }
  serialize() {
    return { message: this.message, statusCode: this.statusCode };
  }
}

export class ValidationError extends HttpError {
  constructor() {
    super({
      name: 'ValidationError',
      message: 'Validation Error',
      statusCode: 400,
    });
  }
}

export class UnauthorizedError extends HttpError {
  constructor() {
    super({
      name: 'Unauthorized Error',
      message: 'Unauthorized Error',
      statusCode: 401,
    });
  }
}

export class ForbiddenError extends HttpError {
  constructor() {
    super({
      name: 'ForbiddenError',
      message: 'Forbidden Error',
      statusCode: 403,
    });
  }
}

export class NotFoundError extends HttpError {
  constructor() {
    super({
      name: 'NotFoundError',
      message: 'Not Found Error',
      statusCode: 404,
    });
  }
}

export class MethodNotAllowedError extends HttpError {
  constructor() {
    super({
      name: 'MethodNotAllowedError',
      message: 'Method Not Allowed Error',
      statusCode: 405,
    });
  }
}

export class InternalServerError extends HttpError {
  constructor() {
    super({
      name: 'InternalServerError',
      message: 'Internal Server Error',
      statusCode: 500,
    });
  }
}
