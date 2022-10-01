---
to: src/components/<%= dir %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.test.tsx
---
import { composeStories } from '@storybook/testing-react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import * as stories from './index.stories';
import { render } from 'lib/tests';

const { Default } = composeStories(stories);

describe('<%= dir %>/<%= h.changeCase.pascal(name) %>', () => {
  test('Default <%= h.changeCase.pascal(name) %>', () => {
    const { getByRole } = render(<Default />);

    // RoleとHTMLを確認
    expect(getByRole('')).toBeInTheDocument();
  });
});
