// eslint-disable-next-line
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { default as FilledButton } from './Container';

export default {
  title: 'molecules/FilledButton',
  component: FilledButton,
} as ComponentMeta<typeof FilledButton>;

const Template: ComponentStory<typeof FilledButton> = ({ ...args }) => (
  <FilledButton {...args}>ボタン</FilledButton>
);

// テストの都合上Containerから呼び出し。
export const Default = Template.bind({});
Default.args = {};

export const WhiteText = Template.bind({});
WhiteText.storyName = '白文字バージョン';
WhiteText.args = { colorCode: '#000000' };

export const BlackText = Template.bind({});
BlackText.storyName = '黒文字バージョン';
BlackText.args = { colorCode: '#FFFFFF' };

export const HasError = Template.bind({});
HasError.storyName = 'エラーバージョン';
HasError.args = { colorCode: 'エラー用' };
