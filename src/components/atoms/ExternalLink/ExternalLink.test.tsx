import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as stories from './index.stories';

const { Default } = composeStories(stories);

describe('atoms/ExternalLink', () => {
  test('Default ExternalLink', () => {
    const { getByRole, getByText } = render(<Default />);
    // RoleとHTMLを確認
    // screen.getByRole('');

    // linkのロールを持つ要素を取得
    const element = getByRole('link');

    // linkのロールが存在しているか
    expect(element).toBeInTheDocument();

    // リンクが想定している先に繋がっているか
    expect(element).toHaveAttribute('href', 'http://localhost:6006');

    // リンクの間の文字がレンダリングされているか
    expect(getByText('storybook')).toBeInTheDocument();
  });
});
