// eslint-disable-next-line
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { default as TextField } from './TextField';

export default {
  title: 'atoms/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = ({ ...args }) => <TextField {...args} />;

export const Default = Template.bind({});
Default.storyName = 'デフォルト';
Default.args = {
  label: 'デフォルトラベル',
  color: 'primary',
  defaultValue: 'デフォルトバリュー',
};

export const IsError = Template.bind({});
IsError.storyName = 'エラーがあるバージョン';
IsError.args = {
  label: 'エラーバージョン',
  helperText: 'エラーだよ！',
  error: true,
  size: 'small',
  id: 'outlined-disabled',
};
