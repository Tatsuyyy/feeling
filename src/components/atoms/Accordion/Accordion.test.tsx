import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as stories from './index.stories';

const { Default } = composeStories(stories);

describe('atoms/Accordion', () => {
  test('[role=button] が含まれているか', () => {
    const { getByRole } = render(<Default />);

    // RoleとHTMLを確認
    expect(getByRole('button')).toBeInTheDocument();
  });

  test('子要素が正しく表示されているか', () => {
    const { getByText } = render(<Default>テスト</Default>);

    // RoleとHTMLを確認
    expect(getByText('テスト')).toBeInTheDocument();
  });
});
