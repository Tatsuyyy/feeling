---
to: src/components/<%= dir %>/<%= h.changeCase.pascal(name) %>/index.stories.tsx
---
// eslint-disable-next-line
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { default as <%= h.changeCase.pascal(name) %> } from './<%= h.changeCase.pascal(name) %>';

export default {
  title: '<%= dir %>/<%= h.changeCase.pascal(name) %>',
  component: <%= h.changeCase.pascal(name) %>
} as ComponentMeta<typeof <%= h.changeCase.pascal(name) %>>;

const Template: ComponentStory<typeof <%= h.changeCase.pascal(name) %>> = ({ ...args }) => <<%= h.changeCase.pascal(name) %> {...args} />

export const Default = Template.bind({})
Default.args = {}