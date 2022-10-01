// eslint-disable-next-line
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { default as SamplePage } from './SamplePage';

export default {
  title: 'templates/SamplePage',
  component: SamplePage,
} as ComponentMeta<typeof SamplePage>;

const Template: ComponentStory<typeof SamplePage> = ({ ...args }) => <SamplePage {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: ['red', 'blue', 'magenta', 'yellow'],
};
