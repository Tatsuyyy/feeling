import { Typography } from '@mui/material';
// eslint-disable-next-line
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { default as ExternalLink } from './ExternalLink';

export default {
  title: 'atoms/ExternalLink',
  component: ExternalLink,
} as ComponentMeta<typeof ExternalLink>;

const Template: ComponentStory<typeof ExternalLink> = ({ ...args }) => <ExternalLink {...args} />;

export const Default = Template.bind({});
Default.storyName = 'デフォルト';
Default.args = {
  href: 'http://localhost:6006',
  children: <Typography>storybook</Typography>,
};
