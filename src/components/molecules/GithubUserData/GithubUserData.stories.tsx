import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { GithubUserData, GithubUserDataProps } from './GithubUserData';

export default {
  title: 'molecules/GithubUserData',
  component: GithubUserData,
} as Meta;

const Template: Story<GithubUserDataProps> = (args) => <GithubUserData {...args} />;

export const Default = Template.bind({});
Default.args = {
  ghUserName: 'gladiator',
};
