// eslint-disable-next-line
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { default as SampleColor } from './Container';
import { clientHandlers } from 'mocks/handlers/client';
// import { default as SampleColor } from './SampleColor';

export default {
  title: 'organisms/SampleColor',
  component: SampleColor,
} as ComponentMeta<typeof SampleColor>;

const Template: ComponentStory<typeof SampleColor> = ({ ...args }) => <SampleColor {...args} />;

export const Default = Template.bind({});
Default.storyName = 'リクエスト前';
Default.args = {
  data: ['red', 'blue', 'magenta', 'yellow'],
};

export const withResult = Template.bind({});
withResult.storyName = 'リクエスト成功時';
withResult.args = {
  data: ['red', 'blue', 'magenta', 'yellow', 'cyan'],
};
withResult.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button', { name: 'red' }));
};
withResult.parameters = {
  msw: {
    handlers: clientHandlers,
  },
};
