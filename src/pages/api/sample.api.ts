import type { NextApiRequest, NextApiResponse } from 'next';
import { apiHandler, KeyError, QueryStringError } from 'lib/serverside/api/sample';

const sampleData = {
  red: { name: 'red', code: '#f00' },
  green: { name: 'green', code: '#0f0' },
  blue: { name: 'green', code: '#00f' },
  cyan: { name: 'cyan', code: '#0ff' },
  magenta: { name: 'magenta', code: '#f0f' },
  yellow: { name: 'yellow', code: '#f0f' },
  black: { name: 'yellow', code: '#black' },
};

const iscolorType = (value: string | string[]): value is keyof typeof sampleData => {
  return `${value}` in sampleData;
};

/**
 * GETリクエストに対応するハンドラ
 */
const getHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const { color } = req.query;

  /**
   * サンプル用に細かく分けていますが、ここの分岐はzod等でバリデーションする場合は不要で、
   * queryStringに関するエラーはもっと大きくまとめてもいいとのことです。
   * @todo zod対応
   */
  if (!color) {
    // colorがqueryStringに存在しない場合
    throw new QueryStringError();
  }

  if (iscolorType(color)) {
    res.status(200).json(sampleData[color]);
  } else {
    // キーに存在しない色が呼び出されたとき
    throw new KeyError();
  }
};

/**
 * エラーハンドリング用にapiHandlerに渡してエクスポートする
 */
export default apiHandler({ GET: getHandler });
