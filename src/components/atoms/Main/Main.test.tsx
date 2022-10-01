import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as stories from './index.stories';

const { Default } = composeStories(stories);

describe('atoms/Main', () => {
  test('[role=main]であるか', () => {
    const { getByRole } = render(<Default />);

    expect(getByRole('main')).toBeInTheDocument();
  });
});
