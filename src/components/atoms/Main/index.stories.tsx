// eslint-disable-next-line
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { default as Main } from './Main';

export default {
  title: 'atoms/Main',
  component: Main
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = ({ ...args }) => <Main {...args} />

export const Default = Template.bind({})
Default.args = {}