import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RadioButton, RadioButtonProps } from './RadioButton';

export default {
  title: 'atoms/RadioButton',
  component: RadioButton,
} as Meta;

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = { type: 'radio' };
