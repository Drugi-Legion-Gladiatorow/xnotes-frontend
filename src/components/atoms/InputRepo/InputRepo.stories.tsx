import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { InputRepo, InputRepoProps } from './InputRepo';

export default {
  title: 'atoms/InputRepo',
  component: InputRepo,
} as Meta;

const Template: Story<InputRepoProps> = (args) => <InputRepo {...args} />;

export const Default = Template.bind({});
Default.args = { type: 'text' };
