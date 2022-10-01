import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { HttpMethod, isHttpMethod } from './methods';
import { HttpError, InternalServerError } from 'lib/errors/baseError';

type Handlers = {
  [key in HttpMethod]?: NextApiHandler;
};

export class QueryStringError extends HttpError {
  /**
   * クエリにcolorが存在しない場合にthrowされる
   */
  constructor() {
    super({
      statusCode: 400,
      message: 'クエリが存在しません。queryStringに?colorを指定してください。',
      name: 'queryDoesNotExists',
    });
  }
}

export class KeyError extends HttpError {
  /**
   *  指定したcolorが存在しない場合にthrowされる
   */
  constructor() {
    super({
      statusCode: 400,
      message: 'キーが存在しません。',
      name: 'KeyDoesNotExists',
    });
  }
}

export class MethodNotAllowedError extends HttpError {
  /**
   * @param method 呼び出されたHTTPメソッド名
   */
  constructor(method: string) {
    super({
      statusCode: 405,
      message: `${method} Method は許可されていません`,
      name: 'MethodNotAllowedError',
    });
  }
}

/**
 * 上記で定義したエラーをキャッチしたときの処理
 */
const routeErrorHandler = (error: unknown, res: NextApiResponse) => {
  if (error instanceof MethodNotAllowedError) {
    return res.status(error.statusCode).json(error.serialize());
  }
  if (error instanceof KeyError) {
    return res.status(error.statusCode).json(error.serialize());
  }
  if (error instanceof QueryStringError) {
    return res.status(error.statusCode).json(error.serialize());
  }

  // その他予期してないエラーに対する処理

  return res.status(500).json(new InternalServerError().serialize());
};

/**
 * apiRoute内で共通で起こりうるエラーをthrowする。
 * その後、routeErrorHandlerでcatchする。
 *
 * @example
 *  export default apiHandler({
 *    GET: getHandler,
 *    PATCH: patchHandler,
 *  });
 */
export const apiHandler = (handlers: Handlers) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { method } = req;

      // 正しいHTTPメソッドで呼び出されたかどうか
      if (!method || !isHttpMethod(method)) {
        throw new MethodNotAllowedError(`${req.method}`);
      }

      const handler = handlers[method];

      // 指定したHTTPメソッドで呼び出されたかどうか
      if (!handler) {
        throw new MethodNotAllowedError(`${req.method}`);
      }

      await handler(req, res);
    } catch (err: unknown) {
      routeErrorHandler(err, res);
    }
  };
};
