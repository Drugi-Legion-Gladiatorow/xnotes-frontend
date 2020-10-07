import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ButtonWithIcon, ButtonWithIconProps } from './ButtonWithIcon';

export default {
  title: 'atoms/ButtonWithIcon',
  component: ButtonWithIcon,
} as Meta;

const Template: Story<ButtonWithIconProps> = (args) => <ButtonWithIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Github',
  icon: 'github',
};

export const Black = Template.bind({});
Black.args = {
  children: 'Login with Github',
  icon: 'github',
  black: true,
};

export const WithoutText = Template.bind({});
WithoutText.args = {
  icon: 'github',
};
