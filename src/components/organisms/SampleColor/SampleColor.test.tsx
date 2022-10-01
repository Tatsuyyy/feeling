import { userEvent, waitFor } from '@storybook/testing-library';
import { composeStories } from '@storybook/testing-react';
import '@testing-library/jest-dom';
import Container from './Container';
import * as stories from './index.stories';
import { mockServerStart, render } from 'lib/tests';
import { colorListFactory } from 'mocks/api.my.backend-sample/color';

const { Default } = composeStories(stories);

describe('organisms/SampleColor UI test', () => {
  test('[role=button] かつ [name=red]があるか', () => {
    const { getByRole } = render(<Default />);

    expect(getByRole('button', { name: 'red' })).toBeInTheDocument();
    // RoleとHTMLを確認
  });
});

describe('organisms/SampleColor Logic test', () => {
  mockServerStart();
  test('ボタンクリック時の非同期通信で値が取得できているか', async () => {
    // Container読み込み
    const { getByRole, getByText } = render(<Container data={colorListFactory} />);

    // ボタンクリック
    userEvent.click(getByRole('button', { name: 'red' }));

    await waitFor(() => {
      expect(getByText('#f00')).toBeInTheDocument();
    });
  });
});
