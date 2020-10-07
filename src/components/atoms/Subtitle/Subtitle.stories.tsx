import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Subtitle, SubtitleProps } from './Subtitle';

export default {
  title: 'Atoms/Subtitle',
  component: Subtitle,
} as Meta;

const Template: Story<SubtitleProps> = (args) => <Subtitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};
