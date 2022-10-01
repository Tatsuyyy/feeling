import { composeStories } from '@storybook/testing-react';
import '@testing-library/jest-dom';
import * as stories from './index.stories';
import { render } from 'lib/tests';

const { Default } = composeStories(stories);

describe('templates/SamplePage UI test', () => {
  test('main ランドマークを1つだけ識別できるか', () => {
    const { getByRole } = render(<Default />);
    const main = getByRole('main');
    expect(main).toBeInTheDocument();
  });
});
