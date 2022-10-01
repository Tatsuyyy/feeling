import { MockedRequest, ResponseResolver, restContext } from 'msw';
import { SampleColor, SampleColorTypes } from 'types/sample';

// getリクエストで返す値の一例を定義して返す
const get: ResponseResolver<MockedRequest, typeof restContext> = (req, res, ctx) => {
  return res(ctx.json(colorListFactory));
};

export const colorListFactory: SampleColorTypes[] = [
  'red',
  'green',
  'blue',
  'magenta',
  'yellow',
  'cyan',
];
const handler = { get };

export default handler;
