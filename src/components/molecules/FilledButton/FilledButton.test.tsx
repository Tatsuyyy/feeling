import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as stories from './index.stories';

const { Default, WhiteText, BlackText, HasError } = composeStories(stories);

describe('molecules/FilledButton', () => {
  test('Default FilledButton', () => {
    const { getByRole } = render(<Default />);

    // RoleとHTMLを確認
    expect(getByRole('button')).toBeInTheDocument();
  });

  test('テキストが白で表示されているか', () => {
    const { getByRole } = render(<WhiteText>テキスト</WhiteText>);
    expect(getByRole('button')).toHaveStyle({ color: '#FFFFFF' });
  });

  test('テキストが黒で表示されているか', () => {
    const { getByRole } = render(<BlackText>テキスト</BlackText>);
    expect(getByRole('button')).toHaveStyle({ color: '#000000' });
  });

  test('指定されたカラーコードが不正な値だった場合、#EEEEEEで外枠が埋められているか', () => {
    const { getByRole } = render(<HasError>テキスト</HasError>);
    expect(getByRole('button')).toHaveStyle({ 'background-color': '#EEEEEE' });
  });
});
