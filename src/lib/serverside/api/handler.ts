import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import errorHandler, { MethodNotAllowedError } from './errorHandler';
import { HttpMethod, isHttpMethod } from './methods';

type Handlers = {
  [key in HttpMethod]?: NextApiHandler;
};

const apiHandler = (handlers: Handlers) => {
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
      errorHandler(err, res);
    }
  };
};

export default apiHandler;
