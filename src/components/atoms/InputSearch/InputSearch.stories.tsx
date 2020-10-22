import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { InputSearch, InputSearchProps } from './InputSearch';

export default {
  title: 'atoms/InputSearch',
  component: InputSearch,
} as Meta;

const Template: Story<InputSearchProps> = (args) => <InputSearch {...args} />;

export const Default = Template.bind({});
Default.args = { type: 'text', placeholder: 'search' };
