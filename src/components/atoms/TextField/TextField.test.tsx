import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as stories from './index.stories';

const { Default, IsError } = composeStories(stories);

describe('atoms/TextField', () => {
  test('Default TextField', () => {
    const { getByRole, getByLabelText } = render(<Default />);

    // RoleとHTMLを確認
    // screen.getByRole('');

    // textboxのロールを持つ要素を取得
    const element = getByRole('textbox');

    // コンポーネント内にテキストボックスが存在しているか;
    expect(element).toBeInTheDocument();

    // デフォルトバリューを保持しているか;
    expect(element).toHaveValue('デフォルトバリュー');

    // ラベルがレンダリングされているか
    expect(getByLabelText('デフォルトラベル')).toBeInTheDocument();
  });
  test('IsError TextField', () => {
    const { getByRole, getByLabelText, getByText } = render(<IsError />);

    // screen.getByRole('');

    // textboxのロールを持つ要素を取得
    const element = getByRole('textbox');

    // コンポーネント内にテキストボックスが存在しているか;
    expect(element).toBeInTheDocument();

    // 値を保持していないか
    expect(element).toHaveValue('');

    // ラベルがレンダリングされているか
    expect(getByLabelText('エラーバージョン')).toBeInTheDocument();

    // helperTextがレンダリングされているか
    expect(getByText('エラーだよ！')).toBeInTheDocument();
  });
});
