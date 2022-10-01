import { MockedRequest, ResponseResolver, restContext } from 'msw';
import { KeyError } from 'lib/serverside/api/sample';
import { SampleColor, SampleColorTypes } from 'types/sample';

/** 型ガード */
const iscolorType = (value: string): value is SampleColorTypes => value in colorFactory;

const get: ResponseResolver<MockedRequest, typeof restContext> = (req, res, ctx) => {
  const color = req.url.searchParams.get('color');
  if (!!color && iscolorType(color)) return res(ctx.json(colorFactory[color]));

  // キーに存在しない色が呼び出されたとき
  throw new KeyError();
};

export const colorFactory: SampleColor = {
  red: { name: 'red', code: '#f00' },
  green: { name: 'green', code: '#0f0' },
  blue: { name: 'blue', code: '#00f' },
  cyan: { name: 'cyan', code: '#0ff' },
  magenta: { name: 'magenta', code: '#f0f' },
  yellow: { name: 'yellow', code: '#f0f' },
};

const handler = { get };

export default handler;
