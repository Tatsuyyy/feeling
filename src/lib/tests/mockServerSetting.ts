import { setupServer } from 'msw/lib/node';
import { clientHandlers } from 'mocks/handlers/client';
import { serverHandlers } from 'mocks/handlers/server';

// test時はserver側でしか実行されないため、両方のhandlerを読み込む。
export const server = setupServer(...serverHandlers, ...clientHandlers);

// test用
export const mockServerStart = () => {
  // APIをmockingする
  beforeAll(() => server.listen());

  // 取得ごとにhandlerをリセットして正しく取得を行う
  afterEach(() => server.resetHandlers());

  // test終了後に閉じる
  afterAll(() => server.close());
};
