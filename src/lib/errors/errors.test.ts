import { NotFoundError } from './baseError';

describe('src/errors.test.ts', () => {
  describe('HttpError', () => {
    test('serialize', () => {
      const error = new NotFoundError();
      expect(error.serialize()).toMatchObject({
        message: 'Not Found Error',
        statusCode: 404,
      });
    });
  });
});
