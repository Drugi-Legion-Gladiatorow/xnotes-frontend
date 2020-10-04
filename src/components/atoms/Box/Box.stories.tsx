import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box, BoxProps } from './Box';

export default {
  title: 'Example/Box',
  component: Box,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<BoxProps> = (args) => <Box {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text:
    'So this is text that use global styles from index.module.scss (check font and box-sizing in dev tools)',
};
