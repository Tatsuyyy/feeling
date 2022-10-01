// eslint-disable-next-line
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { default as Accordion } from './Accordion';

export default {
  title: 'atoms/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = ({ ...args }) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = { summary: '開く', children: 'ここに要素が入ります' };
