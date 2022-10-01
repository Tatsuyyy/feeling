// eslint-disable-next-line
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { default as Checkbox } from './Checkbox';

export default {
  title: 'atoms/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = ({ ...args }) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.storyName = 'デフォルト';
Default.args = {
  label: 'デフォルトラベル',
  defaultChecked: true,
};

export const IsError = Template.bind({});
IsError.storyName = 'エラーがある状態';
IsError.args = {
  label: 'Negative',
  helperText: 'エラーだよ！',
  error: true,
};
