import { NextApiResponse } from 'next';
import { HttpError } from 'lib/errors/baseError';

export class Teapot extends HttpError {
  constructor() {
    super({
      statusCode: 418,
      message: 'The requested entity body is short and stout.',
      name: ' I’m a teapot.',
    });
  }
}

/**
 * throwされるエラークラスを決めておいて、ここで判別してハンドリングする
 * 使用する際はcatchブロックでerrorとresを使って呼び出す。
 * */
const errorHandler = (error: unknown, res: NextApiResponse) => {
  if (error instanceof Teapot) {
    return res.status(error.statusCode).json(error.serialize());
  }
};
