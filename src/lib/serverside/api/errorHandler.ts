import axios from 'axios';
import { NextApiResponse } from 'next';
import { HttpError } from 'lib/errors/baseError';

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

export class RequestQueryError extends HttpError {
  constructor() {
    super({
      statusCode: 400,
      message: 'クエリが不正',
      name: 'InvalidQueryParameter',
    });
  }
}

/**
 * API Routes内でthrowされるエラークラスを決めておいて、ここで判別してハンドリングする
 * */
const errorHandler = (error: unknown, res: NextApiResponse) => {
  console.log('handle');

  if (error instanceof RequestQueryError) {
    return res.status(error.statusCode).end();
  }

  if (!!axios.isAxiosError(error) && error.response) {
    return res.status(error.response.status).json(error.response.data);
  }

  // その他予期してないエラーに対する処理
  return res.status(500).send({
    message: 'Internal Server Error',
  });
};

export default errorHandler;
