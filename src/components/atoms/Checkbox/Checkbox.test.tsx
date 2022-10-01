import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as stories from './index.stories';

const { Default, IsError } = composeStories(stories);

describe('atoms/Checkbox', () => {
  test('Default Checkbox', () => {
    const { getByRole, getByText } = render(<Default />);

    // RoleとHTMLを確認
    // screen.getByRole('');

    // checkboxのロールを持つ要素を取得
    const element = getByRole('checkbox');

    // checkboxのロールが存在しているか
    expect(element).toBeInTheDocument();

    // checkboxのバリューがtrueか
    expect(element).toBeChecked();

    // ラベルがレンダリングされているか
    expect(getByText('デフォルトラベル')).toBeInTheDocument();
  });
  test('IsError Checkbox', () => {
    const { getByRole, getByLabelText, getByText } = render(<IsError />);

    // checkboxのロールを持つ要素を取得
    const element = getByRole('checkbox');

    // checkboxのロールが存在しているか
    expect(element).toBeInTheDocument();

    // checkboxのバリューがfalseか
    expect(element).not.toBeChecked();

    // ラベルがレンダリングされているか
    expect(getByLabelText('Negative')).toBeInTheDocument();

    // helperTextがレンダリングされているか
    expect(getByText('エラーだよ！')).toBeInTheDocument();
  });
});
